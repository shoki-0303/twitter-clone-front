const initialState = {
  isOpenDrawer: false
}

export const common = (state = initialState, action) => {
  switch(action.type) {
    case 'openDrawer':
      return Object.assign({}, state, {isOpenDrawer: true});
    case 'closeDrawer':
      return Object.assign({}, state, {isOpenDrawer: false});
    default:
      return state;
  }
}