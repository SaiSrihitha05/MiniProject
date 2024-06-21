import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductList.css'
function ProductList() {

    let [search, setSearch] = useState('') 
    let [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data)})
    },[])

    // let { state } = useLocation();
    // let products = state?.products || [];
    // let search = state?.search || '';
    let navigate = useNavigate();

    function handleDetails(itemId) {
        let product = products.filter(prod=>prod.id==itemId)
        navigate('/product', { state: product  });
      }
      
      function handleSearch(searchEvent){
        setSearch(searchEvent.target.value)
      }

  return (
    <div className='app-div'>
        <div className='pt-3'>
        <input type='text' className='form-control w-50 mx-auto Shadow fs-3 mb-3' placeholder='🔍Search here' onChange={handleSearch}/>
      {search===''?
        <div className='row m-2'>
        {//iterating through the products array
            products.map(item => (
            <div key={item.id} className="col-md-4 mb-4 d-grid justify-content-space-around" style={{minHeight:'50vh'}}>
                <div className="card bg-white p-3 Shadow">
                   <img src={item.image} className="card-img w-50" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                    <div className='btn details w-50 mx-auto' onClick={()=>handleDetails(item.id)}>Details</div>
                </div>
            </div>
            ))
        }
        </div>:
        <div className='row'>
          {
            products.map(item => (
              item.title.toLowerCase().includes(search.toLowerCase())===true &&
              <div key={item.id} className="col-md-4 mb-4 d-grid justify-content-space-around" style={{minHeight:'50vh'}}>
                <div className="card bg-white p-3 shadow">
                 <img src={item.image} className="card-img w-50" alt={item.title} />
                  <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                  </div>
                  <div className='btn details w-50 mx-auto' onClick={()=>handleDetails(item.id)}>Details</div>
                </div>
              </div>
            ))
          }
        </div>
        }
        </div>
    </div>
  )
}

export default ProductList