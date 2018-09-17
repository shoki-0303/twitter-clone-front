import axios from 'axios'

export const fetchTweets = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/api/v1/tweets')
    .then((response)=>{
      dispatch({
        type: 'FETCH_TWEETS',
        payload: {
          tweets: response.data
        }
      })
    })
    .catch((e)=>{console.log(e)})
  }
}