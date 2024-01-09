import dayjs from 'dayjs';
import React from 'react'
import {Link, redirect, useLoaderData } from 'react-router-dom';

export async function loader({params}) {

  try {
    const res=await fetch(`http://localhost:3000/batches/${params.batchId}/recorded-sessions`,{credentials:'include'})
    const recordedSessions= await res.json()
    return {recordedSessions};
    
  } catch (error) {
    return redirect('/login')
    
  }



 
}

function BatchPage() {

  const {recordedSessions} = useLoaderData();
  
  return (
    <main>
      <div className="batchpage-header">
      <h2>Recourded Lives</h2>
      <Link to={'/add-session'}>Add Session</Link>
      </div>

      <ul className='recourdingList'>
        {
          recordedSessions.map((session,index)=>{
            return(
              <li className='recourding' key={index}>
          <div className='recourdingDate'>
          <span className='recourdingDay'>{dayjs(session.date).format('DD')}</span>
          <span className='recourdingMonth'>{dayjs(session.date).format('MMM')}</span>
          </div>
          
          <div>
          <h3>{session.name}</h3>
          <p>{session.description}</p>
          <ul className="tags">
            <li className="tag">React</li>
            <li className="tag">Expressjs</li>
          </ul>
          </div>

          {/* watch recrdng & passwrd link */}
          <div className="recordingActions">
            <div className="recordingAction">
              <Link to={session.videolink}>Watch Recording</Link>
            </div>
            <span className="recordingAction">{session.password} </span>

          </div>
        </li>

            )
          })
        }


         {/* dummy data */}

        {/* <li className='recourding'>
          <div className='recourdingDate'>
          <span className='recourdingDay'>12</span>
          <span className='recourdingMonth'>Oct</span>
          </div>
          
          <div>
          <h3>React and expressjs intro Class</h3>
          <p>intro to react and expressjs Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, dolorem.</p>
          <ul className="tags">
            <li className="tag">React</li>
            <li className="tag">Expressjs</li>
          </ul>
          </div>
        </li>

        <li className='recourding'>
          <div className='recourdingDate'>
          <span className='recourdingDay'>12</span>
          <span className='recourdingMonth'>Oct</span>
          </div>
          
          <div>
          <h3>React and expressjs intro Class</h3>
          <p>intro to react and expressjs Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, dolorem.</p>
          <ul className="tags">
            <li className="tag">React</li>
            <li className="tag">Expressjs</li>
          </ul>
          </div>
        </li>
        
        <li className='recourding'>
          <div className='recourdingDate'>
          <span className='recourdingDay'>12</span>
          <span className='recourdingMonth'>Oct</span>
          </div>
          
          <div>
          <h3>React and expressjs intro Class</h3>
          <p>intro to react and expressjs Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, dolorem.</p>
          <ul className="tags">
            <li className="tag">React</li>
            <li className="tag">Expressjs</li>
          </ul>
          </div>
        </li> */}
      </ul>
    </main>
  )
}

export default BatchPage