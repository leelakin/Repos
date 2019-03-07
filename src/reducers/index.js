import { combineReducers } from 'redux'

import { ADD_REPO, SET_MSG } from '../actions/types'

const allReposReducer = (state = [], action) => {
  if (action.type === ADD_REPO) {
    return [...state, action.payload]
    //add to old state as new array
  }
  return state
}

const errorMsgReducer = (state = "", action) => {
  if (action.type === SET_MSG) {
    return action.payload
  }
  return state
}

export default combineReducers({
  allRepos: allReposReducer,
  errorMsg: errorMsgReducer
})