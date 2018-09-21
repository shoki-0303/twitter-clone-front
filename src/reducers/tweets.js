const InitialState = {
  entities: [],
  tweet: {
    id: 0,
    title: '',
    image: '',
    body: '',
    created_at: '',
    updated_at: ''
  }
}


export const tweets = (state = InitialState, action) => {
  switch(action.type) {
    case 'FETCH_TWEETS':
      return Object.assign({}, state, action.payload);
    case 'FETCH_TWEET':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}