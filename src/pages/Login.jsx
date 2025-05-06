import '../css/Login.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth"
import {auth} from '../Firebase'
import {useNavigate} from 'react-router-dom'
function login(){
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
   const loginUser=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      navigate('/home')
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
        alert('Wrong credentials or user does not exist')
        setEmail('')
        setPassword('')
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   }
    return(
      <>
      <div className="login_main">
        <div className="login_frm">
            <h1 style={{color:'red', fontWeight:'600'}}>Login</h1>
            <input type="email"
             placeholder='enter email'
             required
             value={email}
             onChange={(event)=>{setEmail(event.target.value)}}
              />
            <input type="password" 
            placeholder='enter password' 
            required
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            />
            <button onClick={loginUser}>Login</button>
            <Link to='/register' style={{fontSize:'20px',fontWeight:'600',textDecoration:'none'}}>Not a registered user? Singup</Link>
        </div>
      </div>
      </>
    )
  }
  export default login