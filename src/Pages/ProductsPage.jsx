import React, { useState } from 'react'
import Header from '../components/Header'
import Data from "../Data.json"
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

export default function ProductsPage() {

  const [products, setProducts] = useState(Data.products)

  return (
    <div>
      <Header />

      <div className="products-container">
         {
          products.map((p ,i)=>(
            <ProductCard key={i} product={p}/>
          ))
         }

      </div>
      <Footer/>

    </div>
  )
}
