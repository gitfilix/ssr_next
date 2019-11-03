import React from 'react'
import Header from '../includes/header'

const MainLayout = (props) => (
  <>
    <Header />
    {props.children}
  </>
)

export default MainLayout
