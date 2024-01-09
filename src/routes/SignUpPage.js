import axios from 'axios';
import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function SignUpPage(props) {

  const navigate=useNavigate()

    const nameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()

    function handleSignUp(event){
        event.preventDefault()
        // console.log(nameRef)
        const name=nameRef.current.value

        const email=emailRef.current.value
        
        const password=passwordRef.current.value

        const payload={
          name:name,
          email:email,
          password:password
        }

        axios.post('http://localhost:3000/users/signup',payload)
        .then(data=>{
          console.log(data)
          alert("SignUp Succesfull..Now Login to your Account!")
          navigate('/login')
        })
        .catch(error=>{
          console.log(error)
        })
      }

  
  return (
    <main>
       <div className="signup-heading">
       <h1>Sign Up</h1>
        <p>It's quick and easy</p>
       </div>
        <form onSubmit={handleSignUp} className='authForm'>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} placeholder='Enter your name...' type="text" id='name' />
            <label htmlFor="email">Email</label>
            <input ref={emailRef} placeholder='Enter your email...' type="email" id='email'/>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} placeholder='Enter your password...' type="password" id='password' />
            <button type='submit'>Sign Up</button>
        </form>

        <div className="linkto-login">
          <p>Already Registered with us? <br />
          If so,click the button below to Login to your Account</p>
          <button><Link to={`/login`}>Login</Link></button>
        </div>
    </main>
  )
}

export default SignUpPage