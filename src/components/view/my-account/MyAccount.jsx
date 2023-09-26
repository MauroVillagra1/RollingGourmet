import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import "./MyAccount.css"
import { NavLink } from 'react-router-dom'

function MyAccount() {
  const [userActive, setUserActive] = useState({})
  useEffect(()=>{
    setUserActive(JSON.parse(sessionStorage.getItem("userActive")))
  },[])
  return (
    <>
    <div className='my-account-content d-flex justify-content-center flex-column align-items-center' >
        <div className='my-account-title text-light'><h3>{userActive.userName}</h3></div>
        <div className='my-account-image'><img src={userActive.ProfilePicture} alt="user-image" /></div>
        <NavLink className="my-account-order-button btn" to={"orders"}><Button className="text-light w-100">My orders</Button>
</NavLink>
    </div>
    </>
  )
}

export default MyAccount