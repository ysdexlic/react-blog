import React, { Component } from 'react'

export class Article extends Component {

  constructor(props){
    super(props)

    if(!this.props.route && !this.props.articlePath) {
      throw new Error('Please supply prop articlePath to component')
    }
    if(this.props.route && !this.props.route.articlePath) {
      throw new Error('Please supply prop articlePath to route')
    }
    this.state = {
      article: ''
    }
  }

  componentWillMount() {
    this.path = this.props.articlePath ? this.props.articlePath : this.props.route.articlePath
    this.readAsTextFile(this.path + '/' + this.props.match.params.article + '.md')
  }

  readAsTextFile = (file) => {
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if(xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({article: xhttp.responseText})
      }
    }
    xhttp.open("GET", file, false)
    xhttp.send()
  }

  render() {
    // TODO: Parse markdown as HTML
    return(
      <div>{this.state.article}</div>
    )
  }
}

export default Article
