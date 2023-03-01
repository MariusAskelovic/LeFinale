import { useState, useEffect } from 'react';
import OneProduct from '../oneProduct/OneProduct';
import getAllProducts from '../../services/ProductsService';

const ProductsList = () => {
  const [items, setItems] = useState([]);

  const getProducts = () => {
    getAllProducts().then((result) => {
      setItems([...result]);
    })
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <OneProduct items={items} />
    </div>
  )
}

export default ProductsList