import { useMutation } from '@apollo/client';
import React from 'react';

import { AUTHENTICATE_USER } from '../../queries';
import img from '../../assets/l2.png';
import useForm from '../lib/useForm';
import Error from '../lib/Error';

import './Signup.css';

const Signin = ({ refetch, history }) => {
  const { inputs, handleChange, clearForm } = useForm({
    username: '',
    password: '',
  });

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

  const handleSubmit = async (e, authenticateUser) => {
    e.preventDefault();
    await authenticateUser().then(({ data }) => {
      // console.log(props);
      localStorage.setItem('token', data.authenticateUser.token);
      console.log(refetch);
      clearForm();
      history.push('/');
    });
  };

  return (
    <div>
      <form
        className='loginbox'
        onSubmit={(e) => handleSubmit(e, authenticateUser)}
      >
        <img src={img} className='avatar' alt='' />
        <h1 className='animate__animated animate__heartBeat'>Signin</h1>
        <div>
          <label>Username</label>
          <input
            className='username'
            type='text'
            name='username'
            placeholder='Enter Username'
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Passsword</label>
          <input
            className='password'
            type='password'
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' disabled={loading || validateForm()}>
          Signup
        </button>
        {error && <Error message={error.message} />}
      </form>
    </div>
  );
};

export default Signin;
