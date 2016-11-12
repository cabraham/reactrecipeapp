import { combineReducers } from 'redux'
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions'

function recipes(state = { isLoading: true}, action) {
  switch (action.type) {
    case REQUEST_RECIPES: {
      return Object.assign({}, state, {
        isLoading: true
      })
    }
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        isLoading: false,
        items: action.recipes
      });
    default:
      return state;
  }
}

export default combineReducers({
  recipes
})
