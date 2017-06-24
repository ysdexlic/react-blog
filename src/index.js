import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import { App } from './components/app'
import { Article } from './components/article'

const newArticle = React.cloneElement(Article)

const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/blog/:article" something="test" render={routeProps => <Article {...routeProps} articlePath={'/articles'}/> } />
    </div>
  </Router>
  , document.querySelector('#root')
);
