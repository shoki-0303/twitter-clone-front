const initialState = {
  isOpenDrawer: false,
  isOpenModal: false
}

export const common = (state = initialState, action) => {
  switch(action.type) {
    case 'openDrawer':
      return Object.assign({}, state, {isOpenDrawer: true});
    case 'closeDrawer':
      return Object.assign({}, state, {isOpenDrawer: false});
    case 'openModal':
      return Object.assign({}, state, {isOpenModal: true});
    case 'closeModal':
      return Object.assign({}, state, {isOpenModal: false});
    default:
      return state;
  }
}