import './App.css'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Aboutus from './Components/Aboutus'
import Login from './Components/Login'
import Signup from './Components/Signup'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
