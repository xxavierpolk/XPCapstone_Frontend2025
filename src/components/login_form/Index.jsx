import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth_context';
import { useState } from 'react';


const LoginForm = ({ setNewUser }) => {
  const nav = useNavigate(); // Initialized useNavigate into variable
  const { login } = useAuth(); // Destructure the login from context
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await login(formData);
    nav('/dashboard');
  }

  const handleClick = () => {
    setNewUser(true);
  };

  return (
    <div className='forms'>
      <h2>Login</h2>
      <form autoComplete='off' onSubmit={handleSubmit}>

        <label htmlFor='email'>Email: </label>

        <input 
          onChange={handleChange}
          type='email' 
          id='email' 
          name='email' 
          placeholder='Email' />

        <label htmlFor='password'>Password: </label>

        <input 
          onChange={handleChange}
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
        />

        <button type='submit' >
          Log In
        </button>

      </form>

      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button>
      </p>

    </div>
  );
};

export default LoginForm;














