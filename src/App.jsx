import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'

function App() {
  const [ openSidebarToggle,setOpenSiebarToggle ] = useState(false)
  const openSidebar = ()=>{
    setOpenSiebarToggle(!openSidebarToggle)
  }


  return (
    <div className="grid-container">
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
      <Home/>

    </div>
  )
}

export default App
