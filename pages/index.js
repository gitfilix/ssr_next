import React, { Component } from 'react'
import axios from 'axios'
import MainLayout from '../components/layouts/mainLayout'

class Home extends Component {
  // getInitialProps is executing on server first and is always expect an object
  static getInitialProps() {
    const  request = axios.get('http://jsonplaceholder.typicode.com/users/1')
                      .then (response => {
                        console.log('response', response.data);
                      })
    console.log('getInitialProps');

    return {
      user: {
        name: 'Francis',
        lastname: 'Jones'
      }
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user
    }
  }

  render() {
    console.log('render: state user', this.state);
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
