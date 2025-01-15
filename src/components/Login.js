import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.tfe.agency/wp-content/uploads/2022/03/amazon.png"
          alt="Amazon logo"
          className="login-image"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            className="signIn-button"
            onClick={signIn}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign-In'}
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>
          By continuing, you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice, and our Interest-Based
          Ads Notice.
        </p>
        <button
          className="create-account-button"
          onClick={register}
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>
    </div>
  );
};

export default Login;
