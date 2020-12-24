import { useMutation } from '@apollo/client';
import React from 'react';

import { REGISTER_USER } from '../../queries';
import logo from '../../assets/log.png';
import useForm from '../lib/useForm';
import Error from '../lib/Error';

import './Signup.css';

const Signup = (props) => {
  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
  });

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
      await props.refetch();
      clearForm();
      props.history.push('/');
    });
  };

  return (
    <div>
      <form
        className='loginbox'
        onSubmit={(e) => handleSubmit(e, registerUser)}
      >
        <img src={logo} className='avatar' alt='logo' />
        <h1 className='animate__animated animate__heartBeat'>Signup</h1>
        <div>
          <label>FirstName</label>
          <input
            className='firstName'
            type='text'
            name='firstName'
            placeholder='Enter first name'
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            className='lastName'
            type='text'
            name='lastName'
            placeholder='Enter last name'
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username</label>
          <input
            className='username'
            type='text'
            name='username'
            placeholder='Enter username'
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            className='phone'
            type='text'
            name='phone'
            placeholder='Enter phone num'
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className='email'
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
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
        <div>
          <label>Confirm Password</label>
          <input
            className='confirmPassword'
            type='password'
            name='passwordConfirmation'
            placeholder='Confirm password'
            value={passwordConfirmation}
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

export default Signup;
