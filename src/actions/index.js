import axios from 'axios'

export const REQUEST_RECIPES = 'REQUEST_RECIPES'
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES'

function requestRecipes() {
  return {
    type: REQUEST_RECIPES
  }
}

function receiveRecipes(json) {
  return {
    type: RECEIVE_RECIPES,
    recipes: json,
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  return dispatch => {
    dispatch(requestRecipes())
    return axios.get('http://localhost:3000/recipes')
      .then(response => response.data)
      .then(data => dispatch(receiveRecipes(data)))
  }
}
