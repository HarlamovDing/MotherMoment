import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const RecoveryModal = ({ style }) => {
  
  const dispatch = useDispatch();
  const handlerCloseModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch]
  )
  
  const handlerOpenThankYouModal = useCallback(
    () => dispatch({ type: 'THANK_YOU_OPEN' }),
    [dispatch]
  )
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    handlerOpenThankYouModal();
  }
  
  return(
    <div style={{...style}} className="modal">
      <div className="modal__wrapper">
        <div className="modal__content">
          <h3>Забыли пароль</h3>
          <form onSubmit={handlerSubmit}>
            <label>
              <input autoComplete='off' className="form-input" required id="recovery-email" name="recovery-email" type="text"/>
              <div className="label-text">E-mail</div>
            </label>
            <input className="btn btn--blue" type="submit" value={"Сбросить пароль"}/>
          </form>
          <button onClick={handlerCloseModal} className="modal__close">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_9_1557)">
                <path d="M13.9997 12.5268L19.6568 6.86963L21.2728 8.48563L15.6157 14.1428L21.2728 19.7999L19.6568 21.4159L13.9997 15.7588L8.34256 21.4159L6.72656 19.7999L12.3837 14.1428L6.72656 8.48563L8.34256 6.86963L13.9997 12.5268Z" fill="#353535"/>
              </g>
              <defs>
                <clipPath id="clip0_9_1557">
                <rect width="27.4286" height="27.4286" fill="white" transform="translate(0.285645 0.428467)"/>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}