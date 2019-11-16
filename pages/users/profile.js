import React, { Component } from 'react'
import MainLayout from '../../components/layouts/mainLayout'
import axios from 'axios'


// classbased component
class Profile extends Component {
  static async getInitialProps({query}) {
    let user

    try {
      const response = await axios.get(`http://jsonplaceholder.typicode.com/users/${query.userId}`);
        user = response.data
    } catch(error) {
      console.error(error)
    }

    return {user}
  }

  showUser = (user) => (
    <div>
      <div>Name: {user.name}</div>
      <div>username: {user.username}</div>
      <div>e-mail: {user.email}</div>
    </div>
  )

  render() {
    console.log('user', this.props);
    return(
      <MainLayout>
      <h1>User Profile</h1>
      <br />
        {this.showUser(this.props.user)}
      </MainLayout>
    )
  }
}

export default Profile
