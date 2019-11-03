import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'

class Home extends Component {
  // getInitialProps is always expect an object
  static getInitialProps() {
    console.log('getInitialProps');

    return {}
  }

  constructor() {
    super()

    console.log('constructor');
  }

  render() {
    return (
      <>
        <MainLayout>
          <h1>Welcome to my new next.js page</h1>
        </MainLayout>
      </>
    )
  }
}


export default Home
