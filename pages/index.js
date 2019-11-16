import React, { Component } from 'react'
import axios from 'axios'
import MainLayout from '../components/layouts/mainLayout'
import Link from 'next/Link'
import myStyles from '../myStyles/main.css'


class Home extends Component {
  // getInitialProps is executing on server first and is always expect an object
  static async getInitialProps(context) {
    let userData;

    try {
      const response = await axios.get('http://jsonplaceholder.typicode.com/users')
      userData = response.data
      console.log('userData', userData);
    } catch {
      console.error('getInitialProps Error');
    }

    console.log('context', context);

    return {
      user: {
        name: 'Francis',
        lastname: 'Jones'
      },
      userData: userData
    }
  }

  // constructor first thing on the client side
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      userData: this.props.userData
    }
  }

  renderUserList = (users) => (
    users.map( (user, i)=>(
      <li className='list-group-item' key={i} >
        <Link
          as={`/users/profile/${user.id}`}
          href={{
              pathname: '/users/profile',
              query: {
                userId: user.id
              }
            }}
        >
          <a>{user.name}</a>
        </Link>
      </li>
    ))
  )

  render() {
    return (
      <>
        <MainLayout>
          <h1 className={myStyles.stupid}>Welcome to my new next.js page</h1>
          <h2>Pick a user</h2>
          <ul className='list-group'>
            {this.renderUserList(this.props.userData)}
          </ul>
        </MainLayout>
      </>
    )
  }
}


export default Home
