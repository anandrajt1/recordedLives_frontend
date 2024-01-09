import axios from 'axios';
import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function LoginPage() {

  const navigate=useNavigate()

    
    const emailRef=useRef()
    const passwordRef=useRef()

    function handlelogin(event){
        event.preventDefault()
        // console.log(nameRef)
        

        const email=emailRef.current.value
        
        const password=passwordRef.current.value

        const payload={
          
          email:email,
          password:password
        }

        axios.post('http://localhost:3000/users/login',payload,{withCredentials:true})
        .then(data=>{
          console.log(data)
          navigate('/batches')
        })
        .catch(error=>{
          console.log(error)
        })
      }

  return (

    <main>
       <div className="signup-heading">
       <h1>Login</h1>
        <p>Login to your Account</p>
       </div>
       
        <form onSubmit={handlelogin} className='authForm'>
            
            <label htmlFor="email">Email</label>
            <input ref={emailRef} placeholder='Enter your email...' type="email" id='email'/>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} placeholder='Enter your password...' type="password" id='password' />
            <button type='submit'>Login</button>
        </form>

       <div className="linkto-signup">
       <p>Create a new Account</p>
        <button><Link to={'/signup'}>Sign Up</Link></button>
       </div>
    </main>
  )
}

export default LoginPage