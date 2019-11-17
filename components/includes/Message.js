import React, { Component } from 'react'
// withRouter as fun
import  { withRouter } from 'next/router';

const Message = (props) => {

  const handler = () => {
    props.router.push({
      pathname: '/users/profile',
      query: { userId: 1}
    }, '/users/profile/userclickedme')
  }


  return (
    <>
        <div>Hello There</div>
        <div>I am the '{props.router.pathname}' -Page</div>
        <span onClick={handler} >clickMe here</span>
    </>
  )
}


export default withRouter(Message)
