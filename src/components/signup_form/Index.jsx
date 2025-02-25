import { useState } from 'react';
import { useAuth } from '../../context/auth/auth_context';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setNewUser }) => {
  const nav = useNavigate(); // Initialized useNavigate into variable
  const { signUp } = useAuth(); // Destructure the signUp from context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match');
    } else {
      await signUp(formData);
      nav('/dashboard');
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleClick = () => {
    setNewUser(false);
  };

  return (
    <div className='forms'>
      <h2>SignUp</h2>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <label htmlFor='name1'>Name: </label>
        <input
          onChange={handleChange}
          type='text'
          id='name1'
          name='name'
          placeholder='First and Last Name'
        />

        <label htmlFor='email1'>Email: </label>
        <input
          onChange={handleChange}
          type='email'
          id='email1'
          name='email'
          placeholder='Email'
        />

        <label htmlFor='password1'>Password: </label>
        <input
          onChange={handleChange}
          type='password'
          id='password1'
          name='password'
          placeholder='Password'
          minLength='6'
        />

        <input
          onChange={handleChange}
          type='password'
          id='password2'
          name='password2'
          placeholder='Confirm Password'
          minLength='6'
        />

        <button type='submit'>Sign In</button>
      </form>
      <p>
        Already have an account? <button onClick={handleClick}>Sign In</button>
      </p>
    </div>
  );
};

export default SignUp;