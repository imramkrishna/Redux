import './App.css'
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
function App() {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard 
    onLogout={()=>{
      
    }}
    userEmail='ram@gmail.com'
    />}/>
  </Routes>
  )
}

export default App
