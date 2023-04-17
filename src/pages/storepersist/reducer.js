import * as actionTypes from './actionTypes'


const defaultState = {
  login: false

}

export default (state = defaultState, action) => {


  if (action.type === actionTypes.MYLOGIN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.login = action.data
    return newState;
  }




  return state;
}