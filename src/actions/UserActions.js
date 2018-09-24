import axios from 'axios'

export const fetchUser = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/api/v1/users/${id}`)
    .then((response)=>{
      dispatch({
        type: 'FETCH_USER',
        payload: {
          current_user: response.data
        }
      })
    })
    .catch((error)=>{
      dispatch({
        type: 'ERROR',
        payload: {
          error: error.response.data
        }
      })
    })
  }
}