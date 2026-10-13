import { createContext, useReducer } from "react";
import CardsContainer from "./components/CardsContainer"
import Cart from "./components/Cart"

export const CartContext = createContext(null);

function reducer(state , action) {
  switch (action.type) {
    case "addItem" : {

      const index = state.findIndex( (item) => item.id === action.product.id );

      if(index === -1) {
        return [...state , {...action.product , itemCount : 1}];
      }
      
      return state.map((item , idx) => idx === index ? {...item , itemCount : item.itemCount + 1} : item );

    } 
    
    case "decreaseQuatinty" : 
      return state.map((item) => item.id === action.id && item.itemCount > 1 ? {...item , itemCount : item.itemCount - 1} : item);
      
    case "increaseQuatinty" : 
      return state.map((item) => item.id === action.id ? {...item , itemCount : item.itemCount + 1} : item);

    case "removeItem" : 
      return state.filter((item) => item.id !== action.id);

    case "clearCart" :
      return [];
    
    default :
      return state;
  }
}

function App() {

  const initial = [];

  const [cart , dispatch] = useReducer(reducer , initial);
  
  return (
    <section className='min-h-screen bg-slate-950 px-4 py-8 sm:px-8 lg:px-12'>

      <CartContext value={{cart , dispatch}}>

        <CardsContainer />
        <Cart />

      </CartContext>
    </section>
  )
}

export default App
