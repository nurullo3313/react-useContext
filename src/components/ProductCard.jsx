import React from 'react'
import { FaHeart } from 'react-icons/fa'

export default function ProductCard({product}) {
    return (



        <div className="product-card">
            <img src={product.imgPod} alt="test" />
            <h1>{product.name}</h1>
            <p>{product.ram} RAM / {product.storage}GB</p>
            <p>${product.price}</p>
            <button >Add to Cart</button>

            <FaHeart className="like-icon" />
        </div>



    )
}
