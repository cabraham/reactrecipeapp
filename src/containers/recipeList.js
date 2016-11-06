import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class RecipeList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchPosts());
  }

  render() {
    const { items } = this.props

      const html = items.map((r,i) =>
        <li key={i}>r.name</li>
     )

    return (
      <div>
        <ul>
        </ul>
        <div className="row">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Pumpkin Pie</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const { recipes } = state
  return {
    items: recipes.items
  }
}


export default connect(mapStateToProps)(RecipeList)
