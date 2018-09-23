const initialState = {
  id: 0,
  name: '',
  email: '',
  created_at: '',
  updated_at: '',
  password_digest: ''
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}