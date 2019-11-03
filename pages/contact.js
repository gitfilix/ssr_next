import React, { Component } from 'react'
import MainLayout from '../components/layouts/mainLayout'
// header injection
import Head from 'next/head'

class Contact extends Component {
  render() {
    return (
      <>
        <Head>
          <title>custom contact page header title</title>
        </Head>
        <MainLayout>
          <h1 style={{ color:'#A33'}}>contact page</h1>
          <h2 className='contact_static'>this is static information</h2>
          <div className='img-container'>
            <img src='/static/images/gc.jpg' alt='#' />
          </div>
        </MainLayout>
      </>
    )
  }
}


export default Contact
