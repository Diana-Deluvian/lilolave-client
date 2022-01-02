import React, { useState } from 'react';

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleOnSubmit(credentials);
  };

  return (
    <form
      className='w-screen-lg my-auto justify-center flex flex-col items-center text-center relative'
      onSubmit={handleOnSubmit}
    >
      <p className='text-gray-500 mx-2 mt-6 max-width-65ch'>
        (Please note, this is for administrators only. Then again, if you feel
        like hacking, be my guest. If you break my security, I will buy you a
        pizza.)
      </p>
      <div className='flex flex-col items-center mt-6'>
        <label>Username:</label>
        <input
          name='username'
          value={credentials.username}
          onChange={handleChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-60`}
        />
      </div>
      <div className='flex flex-col items-center'>
        <label>Password:</label>
        <input
          name='password'
          type='password'
          value={credentials.password}
          onChange={handleChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-60`}
        />
      </div>
      <input
        type='submit'
        value={props.isLoading ? 'Loading...' : 'Submit'}
        className='w-48 p-2 rounded bg-black text-white mb-12 mt-6 cursor-pointer'
      />
      {props.authError.hasError ? (
        <p className='text-primary mx-2 pt-6 -bottom-4 absolute'>
          {props.authError && props.authError.errorMsg}
        </p>
      ) : null}
    </form>
  );
};

export default LoginForm;
