const initialState = {
  id: null,
  token: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH': return {
      ...state, 
      id: 1,
      token: 'CfDJ8OW5OI0CPGJBgSNlGwO0x4YF7qbYKVv7KOO-N0eFtDUzXOrL7F9Xd9W1otVi4ueJOkAmA',
      isAuth: true
    };
    case 'LOGOUT': return {
      ...state, 
      id: null,
      token: null,
      isAuth: false
    };
    default: return state;
  }
}