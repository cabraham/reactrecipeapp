import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import RecipeView from '../components/recipeView'

class RecipeList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts());
  }

  render() {
    const { items, isLoading } = this.props
    return (
      <div>
          {isLoading &&
            <h2>Loading</h2>
          }

          {!isLoading &&
          <ul>
            {items.map((r, i) =>
              <RecipeView key={i} recipe={r} />
            )}
          </ul>
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { recipes } = state
  const {isLoading, items} = recipes
  return {
    isLoading,
    items
  }
}


export default connect(mapStateToProps)(RecipeList)
