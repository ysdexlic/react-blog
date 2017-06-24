import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Blog extends Component {

  render() {
    return(
      <div>
        <h1>Blog</h1>
        <Link to="/blog/test-article-1">test article 1</Link>
      </div>
    )
  }
}

export default Blog
