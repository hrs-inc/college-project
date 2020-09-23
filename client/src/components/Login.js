import React, { useState } from 'react';
import Navbar from './Navbar';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login({
      variables: {
        email,
      },
    });
  };

  return (
    <div className='hero'>
      <Navbar />
      <div className='loginbox'>
        <img src='../image/login.jpg' className='avatar' />
        <h1>Login Here</h1>
        <form>
          <label htmlFor='email'>
            <input
              type='text'
              placeholder='Enter email address'
              value={email}
              onChange={emailHandler}
            />
          </label>
          <p>Password</p>
          <input
            className='password'
            type='password'
            name=''
            placeholder='Enter Password'
          />
          <input type='submit' name='' value='Login' />
          <a href='#'>Forget password?</a>
          <a href=''>Dont have an account?</a>
        </form>
      </div>
    </div>
  );
}
export default Login;
