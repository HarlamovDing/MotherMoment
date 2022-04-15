const initialState = {
  registrationModal: false,
  authModal: false,
  recoveryModal: false,
  thankYouModal: false,
  registrationCompleteModal: false
}

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTRATION_OPEN': return {
      ...state, 
      registrationModal: !state.registrationModal,
      authModal: false
    };
    case 'AUTH_OPEN': return {
      ...state, 
      registrationModal: false,
      authModal: !state.authModal
    };
    case 'RECOVERY_OPEN': return {
      ...state, 
      recoveryModal: !state.recoveryModal, 
      authModal: false, 
    };
    case 'THANK_YOU_OPEN': return {
      ...state, 
      thankYouModal: !state.thankYouModal,
      recoveryModal: false,
      registrationModal: false
    };
    case 'REGISTRATION_COMPLETE_OPEN': return {
      ...state, 
      registrationModal: false,
      registrationCompleteModal: !state.registrationCompleteModal
    };
    case 'CLOSE_MODAL': return {
      ...state, 
      registrationModal: false, 
      authModal: false, 
      recoveryModal: false, 
      thankYouModal: false,
      registrationCompleteModal: false
    }
    default: return state;
  }
}