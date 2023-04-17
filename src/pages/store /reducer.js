import * as actionTypes from './actionTypes'


const defaultState = {
  normalLogin: false,
}

export default (state = defaultState, action) => {

  if (action.type === actionTypes.GETLOGIN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.normalLogin = action.data
    return newState;
  }




  return state;
}