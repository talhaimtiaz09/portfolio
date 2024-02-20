import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Inprogress from './pages/Inprogress'

function App() {


  return (
    <BrowserRouter>
{/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Inprogress/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
library.add(fab, fas, far)
