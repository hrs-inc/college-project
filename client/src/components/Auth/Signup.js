import { useMutation } from '@apollo/client';
import React from 'react';

import { REGISTER_USER } from '../../queries';
import useForm from '../lib/useForm';
import Error from '../lib/Error';
import Copyright from './Copyright';

import { withRouter } from 'react-router-dom';
import { useStyles } from './styles';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  Box,
} from '@material-ui/core';

const Signup = ({ history, refetch }) => {
  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
  });

  const classes = useStyles();

  const {
    firstName,
    lastName,
    username,
    email,
    phone,
    password,
    passwordConfirmation,
  } = inputs;

  const validateForm = () => {
    const isInvalid =
      !username ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      password !== passwordConfirmation;
    return isInvalid;
  };

  const [registerUser, { error, loading }] = useMutation(REGISTER_USER, {
    variables: inputs,
  });

  if (loading) return <h1>Loading</h1>;

  const handleSubmit = (e, registeruser) => {
    e.preventDefault();
    registeruser().then(async ({ data }) => {
      localStorage.setItem('token', data.registerUser.token);
      await refetch();
      clearForm();
      history.push('/');
    });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => handleSubmit(e, registerUser)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                className='firstName'
                label=' First Name '
                autoFocus
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                className='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: '5px' }}>
              <TextField
                autoComplete='username'
                name='username'
                variant='outlined'
                required
                fullWidth
                className='username'
                label='Username'
                autoFocus
                value={username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: '5px' }}>
              <TextField
                variant='outlined'
                fullWidth
                className='phone'
                label='phone'
                name='phone'
                autoComplete='phone'
                type='tel'
                value={phone}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                className='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                className='password'
                autoComplete='current-password'
                value={password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='passwordConfirmation'
                label='Confirm Password'
                type='password'
                className='passwordConfirmation'
                autoComplete='password Confirmation'
                value={passwordConfirmation}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading || validateForm()}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/signin' variant='body2' style={{ cursor: 'pointer' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {error && <Error message={error.message} />}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default withRouter(Signup);
