import React, { Component } from 'react'
import { connect } from 'react-redux'
import RecipeList from '../containers/recipelist'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="well">
          <RecipeList />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps)(App);
