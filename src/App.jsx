import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/about'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
 const App = () => {
  return (
   
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}
export default App