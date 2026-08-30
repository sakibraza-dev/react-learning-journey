import React from 'react'
import Card from './Card'
import Filter from './Filter';

function Products({products , filterCategory , filterHandler}) {
  const displayProduct = filterCategory === "All" ? products : products.filter(product => product.category === filterCategory);
  if (products.length === 0) {
    return (
      <p className="text-center text-xl p-10">
        No products available.
      </p>
    );
  }
  return (
    <>
      <h1 
        className='text-3xl px-5 py-2 font-bold text-white'>
          Products
      </h1>
      
      <Filter products = {products} filterHandler={filterHandler} filterCategory={filterCategory}/>

      <div className='px-5 grid grid-cols-4 gap-5'>
        {
          displayProduct.map(product => <Card key={product.id} product = {product}/>)
        }
      </div>
    </>
  )
}

export default Products