import axios from 'axios'

export const fetchUser = (id) => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/api/v1/users/${id}`)
    .then((response)=>{
      dispatch({
        type: 'FETCH_USER',
        payload: {
          entities: response.data
        }
      })
    })
    .catch((e)=>{console.log(e)})
  }
}