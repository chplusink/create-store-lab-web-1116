export default function manageUsers(state={users:[]}, action){
  switch(action.type){
    case 'ADD_USER':
      const newState = {users:[...state.users, action.payload]}
      return newState
    default:
      return state
  }
}
