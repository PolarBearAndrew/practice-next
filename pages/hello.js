import React from 'react'

export default class extends React.Component {
  // only work in pages not in components
  static async getInitialProps ({ req }) {
    console.log('req', req);
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }
  render () {
    return <div>
      Hello World {this.props.userAgent}
    </div>
  }
}