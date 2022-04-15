import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlerOpenAuthModal = useCallback(
    () => dispatch({ type: 'AUTH_OPEN' }),
    [dispatch]
  )
  
  const userLogout = useCallback(
    () => dispatch({ type: 'LOGOUT' }),
    [dispatch]
  )
  
  const handlerLogout = (e) => {
    e.preventDefault();
    userLogout();
  }
  
  return(
  <div id="header" className={location.pathname === '/' ? 'header white' : 'header'}>
    <div className="container">
      <div className="header__wrapper">
        <a href="/" className="header__logo">
          {
            location.pathname === '/' ? 
            <img src="/images/svg/LogoDark.svg" alt="MamaToma" /> :
            <img src="/images/svg/LogoWhite.svg" alt="MamaToma" />
          }
        </a>
        {
          user.id && user.isAuth ? 
          <>
            <div className="header__menu">
              <nav>
                <ul>
                  <Link to="/">Главная</Link>
                  <Link to="/post">Пост</Link>
                </ul>
              </nav>
              <a href="/#" onClick={handlerLogout} className="header__menu-profile">
                <img src="/images/Avatar.jpg" alt="" />
                <span>Евгений Харламов</span>
              </a>
            </div>
            <div className="header__burger">
              <span></span>
              <span></span>
            </div>
          </> :
          <div className="header__btn">
            <button onClick={handlerOpenAuthModal} className="btn">Sign in</button>
          </div> 
        }
      </div>
    </div>
  </div>
  )
}

export default Header;