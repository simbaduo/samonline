import React from 'react'
import HelloWorld from '../components/HelloWorld'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="topHeader">
        <img height="100px" width="100px" src="./images/samlogowhite.jpg" />
      </div>
      {/* <HelloWorld /> */}
    </>
  )
}

export default HomePage
