import { combineReducers } from 'redux'
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions'

function recipes(state = {recipes: []}, action) {
  switch (action.type) {
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        items: action.recipes
      });
    default:
      return state;
  }
}

export default combineReducers({
  recipes
})
