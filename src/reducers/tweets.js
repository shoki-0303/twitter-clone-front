const initialState = [
  {
    id: 1,
    title: "aaaa",
    body: "aaaa",
    image: "aaaa"
  },
  {
    id: 2,
    title: "bbbb",
    body: "bbbb",
    image: "bbbb"
  }
]

export const tweets = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}