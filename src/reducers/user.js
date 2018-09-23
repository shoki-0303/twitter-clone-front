const initialState = {
  entities: []
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return Object.assign({}, state);
    default:
      return state;
  }
}