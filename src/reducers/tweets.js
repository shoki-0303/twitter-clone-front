const InitialState = {
  entities: [],
}


export const tweets = (state = InitialState, action) => {
  switch(action.type) {
    case 'FETCH_TWEETS':
      return Object.assign({}, state, action.payload);
    case 'FETCH_TWEET':
      return action.payload.tweet
    default:
      return state;
  }
}