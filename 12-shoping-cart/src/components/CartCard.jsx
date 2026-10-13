import { useContext } from "react"
import { CartContext } from "../App"

function CartCard({item}) {

    const {dispatch} = useContext(CartContext);

  return (
    <article className="flex flex-col sm:flex-row gap-5 p-4 sm:p-5 rounded-2xl border border-gray-800 bg-gray-950 hover:border-gray-700 transition-colors">
      {/* Product Image */}
      <div className="w-full sm:w-32 h-36 sm:h-32 shrink-0 rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-3"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                {item.category}
              </p>

              <h3 className="text-lg font-semibold mt-1 break-words">
                {item.name}
              </h3>
            </div>

            <button
              type="button"
              aria-label={`Remove ${item.name} from cart`}
              title="Remove item"
              className="text-gray-500 hover:text-red-400 transition-colors p-1"
              onClick={() =>
                dispatch({
                  type: "removeItem",
                  id: item.id,
                })
              }
            >
              <i className="ri-delete-bin-line text-xl"></i>Remove
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            <i className="ri-star-fill text-amber-400 mr-1"></i>
            {item.rating}
          </p>
        </div>

        {/* Price and Quantity */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">
              Price per item
            </p>

            <p className="text-lg font-bold">
              ₹{item.price.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
              <button
                type="button"
                aria-label={`Decrease quantity of ${item.name}`}
                disabled={item.itemCount <= 1}
                className="w-9 h-9 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                onClick={() =>
                  dispatch({
                    type: "decreaseQuatinty",
                    id: item.id,
                  })
                }
              >
                −
              </button>

              <span className="w-9 text-center text-sm font-medium">
                {item.itemCount}
              </span>

              <button
                type="button"
                aria-label={`Increase quantity of ${item.name}`}
                className="w-9 h-9 hover:bg-gray-800 transition-colors"
                onClick={() =>
                  dispatch({
                    type: "increaseQuatinty",
                    id: item.id,
                  })
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Item Subtotal */}
        <div className="border-t border-gray-800 pt-3 flex justify-between items-center">
          <span className="text-sm text-gray-400">
            Item subtotal
          </span>

          <span className="font-semibold">
            ₹{(item.price * item.itemCount).toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </article>
  )
}

export default CartCard