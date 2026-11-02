import { useSearchParams } from "react-router";
import Card from "./Card";

const vans = [
  {
    id: "1",
    name: "Modest Explorer",
    type: "simple",
    price: 60,
    description: "A simple van for everyday adventures.",
    image: "https://placehold.co/400x250?text=Modest+Explorer"
  },
  {
    id: "2",
    name: "Beach Bum",
    type: "rugged",
    price: 80,
    description: "Perfect for beach trips and outdoor fun.",
    image: "https://placehold.co/400x250?text=Beach+Bum"
  },
  {
    id: "3",
    name: "Reliable Red",
    type: "luxury",
    price: 100,
    description: "A comfortable van for long road trips.",
    image: "https://placehold.co/400x250?text=Reliable+Red"
  },
  {
    id: "4",
    name: "Dream Finder",
    type: "simple",
    price: 75,
    description: "A cozy van for discovering new places.",
    image: "https://placehold.co/400x250?text=Dream+Finder"
  },
  {
    id: "5",
    name: "The Cruiser",
    type: "rugged",
    price: 90,
    description: "Built for adventurous journeys.",
    image: "https://placehold.co/400x250?text=The+Cruiser"
  },
  {
    id: "6",
    name: "Green Wonder",
    type: "luxury",
    price: 120,
    description: "A premium van with extra comfort.",
    image: "https://placehold.co/400x250?text=Green+Wonder"
  }
];

function Home() {

  const filterOptions = ["All" , "Simple" , "Rugged" , "Luxury"];

  const [searchParams , setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get("type");

  const filterdVans = currentFilter ? vans.filter(van => van.type === currentFilter) : vans;

  return (
    <section className='w-full p-2 flex flex-col gap-2 '>
      <section className="flex gap-5">
        {
          filterOptions.map(filter =>
            <span 
              key={filter} 
              className="hover:bg-gray-200 p-2 font-medium rounded"
              onClick={() => filter=== "All" ? setSearchParams({}) : setSearchParams({type : filter.toLocaleLowerCase()})}
            >
                {filter}
            </span>
          )
        }
      </section>
      
      <section className="w-full flex gap-2">
        {filterdVans.map(van => (
          <Card key={van.id} van={van} />
        ))}
      </section>

    </section>
  )
}

export default Home