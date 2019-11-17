import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'
import Message from '../components/includes/Message'
import Router from 'next/router'

class About extends Component {

  handleRouteStart = url => {
    console.log('App is changing to:', url );
  }

  handleRouteChangeComplete = url => {
    console.log('App Route change is complete', url);
  }

  handleBeforeHistoryChange = url => {
    console.log('App changed HistoryChange to:', url);
  }

  // router events
  componentDidMount() {

    Router.events.on('routeChangeStart', this.handleRouteStart)
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete)
    Router.events.on('handleBeforeHistoryChange', this.handleBeforeHistoryChange)

  }

  render() {
    return (
      <>
        <MainLayout>
          <h1>About</h1>
          <Message />
          <br />
          <span onClick={()=> Router.push('/contact')}> click me for next-routing to contact-page</span>
        </MainLayout>
      </>
    )
  }
}


export default About
