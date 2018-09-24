const initialState = {
  current_user: {
    id: 0,
    name: '',
    email: '',
    created_at: '',
    updated_at: '',
    password_digest: ''
  },
  error: {
    status: 200,
    message: 'OK'
  }
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, action.payload);
    case 'ERROR':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}