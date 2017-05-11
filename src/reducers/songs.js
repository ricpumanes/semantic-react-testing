export default (state={}, action) => {
  switch(action.type) {
    case 'GET_SONGS_LIST':
      return Object.assign({}, state, { data: action.data });
    default: return state;
  }
}
