import React from 'react'
import Header from '../includes/header'
// header injection
import Head from 'next/head'
// import css from '../../statics/css/global.css'

const MainLayout = (props) => (
  <>
    <Head>
      <title>My Filiks App with next.js</title>
      <link rel='stylesheet' href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display:400,700|Cormorant+Unicase:500|Major+Mono+Display&display=swap" />
      <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' />
      <link rel='stylesheet' href='/static/css/global.css' />
    </Head>
    <div className='container mainLayout'>
      <Header />
      {props.children}
    </div>
  </>
)

export default MainLayout
