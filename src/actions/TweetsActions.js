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

export const fetchTweet = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/api/v1/tweets/${id}`)
    .then((response)=>{
      dispatch({
        type: 'FETCH_TWEET',
        payload: {
          tweet: response.data
        }
      })
    })
  }
}