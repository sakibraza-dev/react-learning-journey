import Card from "./Card";

const products = [
  {
    id: 1,
    name: "Nike Air Sneakers",
    price: 2499,
    category: "Shoes",
    image: "https://picsum.photos/seed/shoes/300/300",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 1599,
    category: "Electronics",
    image: "https://picsum.photos/seed/headphones/300/300",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 599,
    category: "Clothing",
    image: "https://picsum.photos/seed/tshirt/300/300",
    rating: 4.1,
  },
  {
    id: 4,
    name: "Classic Wrist Watch",
    price: 1899,
    category: "Accessories",
    image: "https://picsum.photos/seed/watch/300/300",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Travel Backpack",
    price: 999,
    category: "Bags",
    image: "https://picsum.photos/seed/backpack/300/300",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Smartphone",
    price: 14999,
    category: "Electronics",
    image: "https://picsum.photos/seed/phone/300/300",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 799,
    category: "Accessories",
    image: "https://picsum.photos/seed/sunglasses/300/300",
    rating: 4.0,
  },
  {
    id: 8,
    name: "Running Shoes",
    price: 1999,
    category: "Shoes",
    image: "https://picsum.photos/seed/runningshoes/300/300",
    rating: 4.2,
  },
];

function CardsContainer() {

  return (
    <section className="w-full">
      <div className="mb-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Explore our collection
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Products
        </h1>

        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Find something you'll love.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </section>
    </section>
  )
}

export default CardsContainer