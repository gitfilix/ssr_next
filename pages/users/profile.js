import React, { Component } from 'react'
import MainLayout from '../../components/layouts/mainLayout';

// classbased component
class Profile extends Component {
  static async getInitialProps({query}) {
    console.log('user query', query);
    return {}
  }

  render() {
    return(
      <MainLayout>
      something>>
      </MainLayout>
    )
  }
}

export default Profile
