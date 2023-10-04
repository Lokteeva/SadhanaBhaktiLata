import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';

import '../Header/header.modules.css';

function Header() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  //admin
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="header ">
      {!isAuth ? (
<<<<<<< HEAD
        <Link to="/login">
          <h3>Вход</h3>
=======
        <Link to="/">
          <h3 className="nav_in">Войти</h3>
>>>>>>> 4e7cef4e560a7449f45f66c222745379eed04ad5
        </Link>
      ) : (
        <div className="nav_in">
          <Link to="/home">
            <div className="header__item">
              <h3>Мои отчеты</h3>
            </div>
          </Link>

          <Link to="/createpost">
            <div className="header__item">
              <h3>Создать отчет</h3>
            </div>
          </Link>

          <a href="#" onClick={signUserOut}>
            <div className="tooltip">
              <i className="bx bx-log-out">
                <span className="tooltiptext">Выйти</span>
              </i>
            </div>
          </a>
        </div>
      )}

      
      
    </div>
  );
}

export default Header
