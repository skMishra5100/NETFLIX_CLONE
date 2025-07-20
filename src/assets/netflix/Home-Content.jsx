import React from 'react'
import { Link } from 'react-router-dom'

const HomeContent = () => {
  return (
    <>
    <div className="content">

    <div className="one">welcome back!</div>
    <div className="two">unlimited movies,tv show and more</div>
    <div className="three">watch anywhere. cancel anytime.</div>
</div>

<div className="btn">

 <Link to="/HomePage" >  <button>finish sign up </button></Link>
</div>
</>
  )
}

export default HomeContent