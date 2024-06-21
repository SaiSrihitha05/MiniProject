import React from 'react'
import { useNavigate } from 'react-router-dom';
import './GetData.css';
import { useEffect, useState } from "react";


function GetData() {
    let [data, setData] = useState([]);
    let [searchData,setSearchData] =useState("")
    let navigate=useNavigate()
    
    
    useEffect(() => {
        let fetchData = async () => {
            try {
                let res = await fetch("https://fakestoreapi.com/products");
                let re = await res.json();
                setData(re);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);
    function handleBuy(id){
        let product=data.filter(prod=>prod.id===id)
        navigate('/product',{ state:product});
    }     
    

    return (
        <div>
            <div className="container">
                <p className='text-dark display-6  m-2 text-center'>Virtual Store 🛒  </p>
                <input type="text" onChange={(e)=>setSearchData(e.target.value)} placeholder='🔍 Search anything here...'  className=' mx-auto m-3 display-6 p-3 w-75 form-control' style={{fontSize:"25px"}}/> 
            </div>
        {searchData===''?
            <div className="d-flex container">
                <div className="row row-cols-sm-2 row-cols-md-5 rows-cols-lg-5 justify-content-center">
                
                    {data.map((obj, index) => (
                        <div key={index} className="card m-2" style={{ border: "none" ,width:"18rem",height:"27rem"}}>
                            <img className='w-75 h-50 p-2 m-2' src={obj.image} alt="" />
                            <p className='title m-2' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{obj.title}</p>
                            <p className='m-2 display-6' style={{ fontSize: "20px", fontFamily: "initial" }}>
                                ${obj.price} <span className="inner text-secondary">$999</span>
                            </p>
                            <button className="btn btn-success w-50 p-2 m-2 " type="submit" onClick={() => handleBuy(obj.id)}>Buy now</button>
                            
                        </div>
                    ))}
                </div>
            </div>
        :
            <div>
               <div className="d-flex container">
                <div className="row row-cols-sm-2 row-cols-md-5 rows-cols-lg-5 justify-content-center">
                    {
                    data.map((obj, index) => (
                        obj.title.toLowerCase().includes
                        (searchData.toLowerCase())===true&&
                        <div key={index} className="card m-2" style={{ border: "none" ,width:"18rem",height:"27rem"}}>
                            <img className='w-75 h-50 p-2 m-2' src={obj.image} alt="" />
                            <p className='title m-2' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{obj.title}</p>
                            <p className='m-2 display-6' style={{ fontSize: "20px", fontFamily: "initial" }}>
                                ${obj.price} <span className="inner text-secondary">$999</span>
                            </p>
                            <button className="btn btn-success w-50 p-2 m-2 " type="submit" onClick={() => handleBuy(obj.id)}>Buy now</button>
                            
                        </div>
                    ))}
                </div>
            </div> 
            </div>
        }
        </div>
    );
}

export default GetData;
