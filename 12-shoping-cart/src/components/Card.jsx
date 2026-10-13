import { useContext } from "react";
import { CartContext } from "../App";

function Card({data}) {

    const {dispatch} = useContext(CartContext);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-xl hover:shadow-violet-950/20">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-800">
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
          {data.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="text-sm text-amber-400">
            ★ {data.rating}
          </span>

          <span className="text-xs text-slate-500">
            In stock
          </span>
        </div>

        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-violet-300">
          {data.name}
        </h3>

        <p className="mt-2 text-xl font-bold text-white">
          ₹{data.price.toLocaleString("en-IN")}
        </p>

        <button
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 mt-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-violet-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          onClick={() =>
            dispatch({ type: "addItem", product: data })
          }
        >
          <span className="text-lg leading-none">+</span>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default Card