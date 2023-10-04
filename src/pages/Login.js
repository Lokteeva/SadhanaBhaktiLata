import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/home');
    });
  };

  return (
  
    <div className="loginEmail">
      <div className="wrapper-login">
          
            <button className="login-with-google-btn " onClick={signInWithGoogle}>
              Войти с помощью Google
            </button>
         
      </div>
    </div>
  );
}

export default Login;
