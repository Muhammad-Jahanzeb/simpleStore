import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import ShopContextProvider from './Context/context'

import './App.css'

function App() {
  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={<Home/>}/>
          <Route path ='/cart' element ={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
    </>
  )
}

export default App
