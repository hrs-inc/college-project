import { useMutation } from '@apollo/client';
import React from 'react';
import { withRouter } from 'react-router-dom';

import { AUTHENTICATE_USER } from '../../queries';
import useForm from '../lib/useForm';
import Error from '../lib/Error';
import Copyright from './Copyright';
import { useStyles } from './styles';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';

const Signin = (props) => {
  const { inputs, handleChange, clearForm } = useForm({
    username: '',
    password: '',
  });

  const classes = useStyles();

  const { username, password } = inputs;

  const validateForm = () => {
    const isInvalid = !username || !password;
    return isInvalid;
  };

  const [authenticateUser, { loading, error }] = useMutation(
    AUTHENTICATE_USER,
    {
      variables: inputs,
    },
  );

  if (loading) return <h1>Loading</h1>;

  const handleSubmit = (event, authenticateUser) => {
    event.preventDefault();
    authenticateUser().then(async ({ data }) => {
      localStorage.setItem('token', data.authenticateUser.token);
      await props.refetch();
      clearForm();
      props.history.push('/');
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => handleSubmit(e, authenticateUser)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            onChange={handleChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading || validateForm()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && <Error message={error.message} />}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Signin);
