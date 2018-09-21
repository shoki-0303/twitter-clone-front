export const tweets = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TWEETS':
      return action.payload.tweets;
    case 'FETCH_TWEET':
      return action.payload.tweet
    default:
      return state;
  }
}