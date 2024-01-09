import axios from 'axios';
import React from 'react'

import { Outlet, Link, useNavigate } from "react-router-dom";

function Root() {
  const navigate=useNavigate()

  function logout(){
    axios.post('http://localhost:3000/users/logout',{},{withCredentials:true})
    .then(data=>{
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
  }


  return (
    <>
    <header>
    <div className="header-left"><Link to={`/`}>RecordeZ</Link></div>
    <div className="header-right">
    <Link to={`/`}>Home</Link>
    <Link to={`/about`}>About</Link>
    <Link to={`/batches`}>Batches</Link>
    <Link to={`/login`}>Login</Link>
    <Link to={`/add-session`}>Add Session</Link>
    <button onClick={logout}>Logout</button>
      
    </div>

   </header>

   
  



   <Outlet />

   {/* <footer>
   <Link to={`/`}>Home</Link>
    <Link to={`/about`}>About</Link>
    <Link to={`/batches`}>Batches</Link>
    
   </footer> */}
    </>
  )
}

export default Root