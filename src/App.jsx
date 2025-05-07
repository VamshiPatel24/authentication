import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Home from '../src/pages/Home'
import Protected from '../src/pages/Protected'
function App(){
  return(
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login/>}></Route>
           <Route path='/register' element={<Signup/>}></Route>
           <Route path='/home' element={<Protected Component={Home}/>}></Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}
export default App