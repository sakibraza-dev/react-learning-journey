import { useContext } from "react"
import { CartContext } from "../App"
import CartCard from "./CartCard";

function Cart() {
    const {cart , dispatch } = useContext(CartContext);

    const totalAmount = cart.reduce((sum , item) => sum + item.price * item.itemCount , 0);
    

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 text-white">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Your Cart</h1>

          <p className="text-gray-400 mt-2">
            {cart.itemCount} {cart.itemCount === 1 ? "item" : "items"} in your bag
          </p>
        </div>

        {cart.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch({ type: "clearCart" })}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <i className="ri-delete-bin-line"></i>
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-gray-800 rounded-2xl bg-gray-950">
          <i className="ri-shopping-cart-2-line text-5xl text-gray-500"></i>

          <h2 className="text-xl font-semibold mt-4">
            Your cart is empty
          </h2>

          <p className="text-gray-400 mt-2 text-center">
            Looks like you haven't added anything yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <aside className="border border-gray-800 rounded-2xl p-6 bg-gray-950 lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-400 mb-4">
              <span>Subtotal</span>
              <span>₹{totalAmount.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between text-gray-400 mb-4">
              <span>Shipping</span>
              <span className="text-green-400">Free</span>
            </div>

            <div className="border-t border-gray-800 pt-4 mt-4 flex justify-between gap-4">
              <span className="font-semibold">Total</span>

              <span className="text-xl font-bold text-violet-400">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              type="button"
              className="w-full mt-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-[0.98] transition-all font-semibold text-white"
              onClick={() => alert("Checkout functionality coming soon!")}
            >
              Proceed to Checkout
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </aside>
        </div>
      )}
    </section>
  )
}

export default Cart