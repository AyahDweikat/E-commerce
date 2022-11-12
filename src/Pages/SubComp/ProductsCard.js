// import React, { Component } from 'react';
import React from 'react';



export default function ProductsCard({product, onClick}) {
  function onProductCardClicked(){
    if( typeof onClick === "function"){
      onClick()
    }
  }
  return (
    <div onClick={onProductCardClicked} className='product-card'>
        <div className="product-img-wrapper">
        <img className='product-img' 
        src={product.image} 
        alt={product.title} />
        </div>
        <div className="product-card-body">
            <h6 className="product-card-title" title={product.title} >
                {product.title}
            </h6>
            <p className="product-card-desc" title={product.description} >
                {product.description}
            </p>
        </div>
    </div>
  )
}
