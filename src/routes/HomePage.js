import React from 'react'
import '../App.css';

import { Link, redirect, useLoaderData } from 'react-router-dom';

// Loader-to fetch data from backend-use this in place of usestate
export async function loader() {
  try {
    const res=await fetch('http://localhost:3000/batches',{credentials:'include'} )
  const batches=await res.json()
  return {batches};
    
  } catch (error) {
    return redirect('/login')
    
  }



  
 
}

function HomePage() {
  const { batches } = useLoaderData();
  // console.log(batches)
    
        
  return (
    <main>
    <h2>Batches</h2>
 
 <ul className="batchList"> 
    {
    batches.map((batch,index)=>{
     return(
       <Link to={'/batches/'+batch._id}>
       <li key={index} className='batch'>{batch.name}</li>
       </Link>
     )
    })
    }
 
 
 </ul>
   
 </main>
  )
}

export default HomePage