import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page from './views/page'
import Recipes from './views/recipes'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/" />
        <Route exact component={Recipes} path="/recipes" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
