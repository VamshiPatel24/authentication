import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Signup.css/'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Firebase'
function signup(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const registerUser=()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Registration successful now you can login')
    navigate('/')
    // ...
  })
  .catch((error) => {
    alert('user already registered or bad credentials')
    setEmail('')
    setPassword('')
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    return(
        <>
        <div className="main">
          <div className="details">
              <h1 style={{color:'red', fontWeight:'600'}}>Sign up</h1>
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
              <button onClick={registerUser}>Sign up</button>
              <Link to='/' style={{fontSize:'20px',fontWeight:'600',textDecoration:'none'}}>Already a registered user? Login</Link>

          </div>
        </div>
        </>
    )
  }
  export default signup