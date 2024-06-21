import React from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css'
function Product() {
  let {state}=useLocation()
  let product=state[0]
  return (
    <div className="cont container">
      <div className="row">
        <div className='col-md-6 mx-auto my-auto'>
          <img className='image' style={{width:"75%"}} src={product.image} alt="" />
        </div>
        <div className="col-md-6 ">
          <p className='title display-6'>{product.title}</p>
          <p className='text-secondary ' style={{fontFamily:"revert"}}>42999 reviews & 1000 ratings</p>
          <p className='desc ' style={{fontSize:"23px"}}>{product.description}</p>
          <p className='' style={{fontSize:"18px"}}>Rating⭐ : {product.rating.rate} / 5</p>
          <p style={{fontSize:"25px"}} className='text-secondary'>{product.category}</p>
          <p className='display-6'>${product.price}</p>
          <p className='' style={{fontSize:"30px"}}>Flash Sale⚡</p>
          <button className="btn btn-success">Proceed to Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
