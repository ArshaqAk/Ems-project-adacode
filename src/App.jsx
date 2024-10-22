import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Admin from './pages/Admin'
import Add from './pages/Add'
import View from './pages/View'
import Edit from './pages/Edit'
import Pagenotfound from './pages/Pagenotfound'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Admin/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
