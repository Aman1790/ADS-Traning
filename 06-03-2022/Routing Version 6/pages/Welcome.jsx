import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import ProductDetails from './ProductDetails'

export default function Welcome() {
  return (
    <div>
   
      <p>Welcome</p>
      <Routes>
         <Route path="/new-user" element={<p>THis is my para</p>}/>
      </Routes>
    </div>
  )
}
