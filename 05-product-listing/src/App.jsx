import { useState } from 'react'
import Products from './components/Products'


function App() {

  const products = [
      {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        stock: 12,
        rating: 4.5,
        image: "https://placehold.co/300x200?text=Headphones",
        description: "Comfortable wireless headphones with noise cancellation."
      },
      {
        id: 2,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 3499,
        stock: 0,
        rating: 4.7,
        image: "https://placehold.co/300x200?text=Keyboard",
        description: "RGB mechanical keyboard with blue switches."
      },
      {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        stock: 8,
        rating: 4.3,
        image: "https://placehold.co/300x200?text=Shoes",
        description: "Lightweight running shoes for everyday workouts."
      },
      {
        id: 4,
        name: "Smart Watch",
        category: "Electronics",
        price: 4999,
        stock: 5,
        rating: 4.6,
        image: "https://placehold.co/300x200?text=Smart+Watch",
        description: "Smart watch with fitness tracking and notifications."
      },
      {
        id: 5,
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 799,
        stock: 25,
        rating: 4.1,
        image: "https://placehold.co/300x200?text=T-Shirt",
        description: "Soft and comfortable 100% cotton T-shirt."
      },
      {
        id: 6,
        name: "Laptop Backpack",
        category: "Accessories",
        price: 1499,
        stock: 3,
        rating: 4.4,
        image: "https://placehold.co/300x200?text=Backpack",
        description: "Water-resistant backpack with a dedicated laptop compartment."
      },
      {
        id: 7,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1899,
        stock: 0,
        rating: 4.2,
        image: "https://placehold.co/300x200?text=Speaker",
        description: "Portable Bluetooth speaker with powerful sound."
      },
      {
        id: 8,
        name: "Denim Jacket",
        category: "Fashion",
        price: 2199,
        stock: 6,
        rating: 4.5,
        image: "https://placehold.co/300x200?text=Jacket",
        description: "Classic denim jacket suitable for casual outfits."
      },
      {
        id: 9,
        name: "Water Bottle",
        category: "Accessories",
        price: 599,
        stock: 18,
        rating: 4.0,
        image: "https://placehold.co/300x200?text=Bottle",
        description: "Reusable stainless steel water bottle."
      },
      {
        id: 10,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 1299,
        stock: 10,
        rating: 4.6,
        image: "https://placehold.co/300x200?text=Gaming+Mouse",
        description: "Ergonomic gaming mouse with adjustable DPI."
      },
      {
        id: 11,
        name: "Leather Wallet",
        category: "Accessories",
        price: 999,
        stock: 0,
        rating: 4.3,
        image: "https://placehold.co/300x200?text=Wallet",
        description: "Compact leather wallet with multiple card slots."
      },
      {
        id: 12,
        name: "Desk Lamp",
        category: "Home",
        price: 1199,
        stock: 7,
        rating: 4.4,
        image: "https://placehold.co/300x200?text=Desk+Lamp",
        description: "Adjustable LED desk lamp for study and work."
      }
    ]

  const [filterCategory , setFilterCategory] = useState("All");

  const filterHandler = (category) => {
    setFilterCategory(category);
  }

  return (
    <>
      <div className='flex flex-col items-center p-5 bg-green-900 gap-2'>
        <h1 className='text-4xl font-bold text-white'>PRODUCT STORE</h1>
        <h2 className='text-lg font-medium'>Browse our available products</h2>
      </div>

      <Products products = {products} filterCategory = {filterCategory} filterHandler={filterHandler}/>
    </>
  )
}

export default App
