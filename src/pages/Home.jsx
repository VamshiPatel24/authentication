import {signOut } from "firebase/auth"
import {auth} from '../Firebase'
import {useNavigate} from 'react-router-dom'
function home(){
  const navigate=useNavigate()
  const logOutUser=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('Logged out successful')
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
    return(
      <>
        <h1>home</h1>
        <button onClick={logOutUser}>Log out</button>
      </>
    )
  }
  export default home