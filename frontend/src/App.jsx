import React from 'react'
import NavbarComponent from './Component/NavbarComponent'
import FooterComponent from './Component/FooterComponent'
import "./App.css"
import ProductPage from './page/productPage'
const App = () => {
  return (
    <div className=''>

      <NavbarComponent/>
      <ProductPage/>

      <FooterComponent/>

    </div>
  )
}

export default App