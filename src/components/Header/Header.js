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
    <div className="header">
      {!isAuth ? (
        <Link to="/login">
          <i  className="signin bx bx-log-in-circle"></i>
        </Link>
      ) : (
        <div className="nav_in">
          <Link to="/">
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