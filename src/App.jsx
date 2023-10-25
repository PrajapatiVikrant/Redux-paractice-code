
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import './App.css'
import Home from './Component/Home'
import Selectproduct from './Component/Selectproduct'
import Cartlist from './Component/Cartlist'



function App() {
  
return (
  <>
 <Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/Select' Component={Selectproduct}/>
  <Route path='/cart' Component={Cartlist}/>
</Routes>
  </>
)

}

export default App
