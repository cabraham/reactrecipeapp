import React, { Component, PropTypes } from 'react'

class RecipeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { recipe } = this.props
    return (
      <div className="row">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a href="#">{recipe.name}</a>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeView
