export const tweets = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TWEETS':
      return action.payload.tweets;
    default:
      return state;
  }
}