// ProductList.js
import React, { useEffect, useState } from "react";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res =fetch('https://fakestoreapi.com/users')
        .then(res=>res.json())
        .then(json=>console.log(json))
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - {product.price}$
        </li>
      ))}
    </ul>
  );
};

export default ProductList;