import { Link } from "react-router"

function Card({van}) {
  return (
    <div className="van-card border-1 border-gray-500">
      <img src={van.image} alt={van.name} />

      <h3>{van.name}</h3>
      <p>{van.description}</p>

      <p>Type: {van.type}</p>
      <h4>${van.price} / day</h4>

      <Link to={`vandetails/${van.id}/${van.type}/${van.name}`} >More</Link>

    </div>
  )
}

export default Card