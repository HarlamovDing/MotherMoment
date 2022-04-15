import React from 'react'
import Mainscreen from "../components/Home/MainScreen";
import About from "../components/Home/About";
import Prices from "../components/Home/Prices";
import Header from "../components/Common/Header"

export default function HomePage () {
  return(
    <div className="homepage">
      <Header/>
      <Mainscreen/>
      <About/>
      <Prices/>
    </div>
  )
}
