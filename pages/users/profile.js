import React, { Component } from 'react'


// functional Component
const Profile = (props) => {

    console.log(props);
    return (
      <>
        <h1>profile user page</h1>
      </>
    )
}

Profile.getInitialProps = async ({req}) => {
  return { values: '1, 2, 3'}
}

export default Profile
