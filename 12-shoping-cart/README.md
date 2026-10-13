# Shopping Cart

A shopping cart application built with React. It displays selected products, lets users update quantities or remove items, and calculates the cart total using Context API and a reducer.

## Features

- Display products added to the cart
- Increase or decrease product quantities
- Remove individual products from the cart
- Clear all items from the cart
- Display product prices and individual subtotals
- Calculate the total number of items
- Display an order summary with subtotal, shipping, and total
- Show an empty-cart state
- Responsive layout for different screen sizes

## What I Learned

- React Context API with `useContext`
- Managing shared state with `useReducer`
- Dispatching actions to update state
- Calculating totals with `reduce()`
- Handling empty states
- Creating reusable components
- Responsive styling with Tailwind CSS
- Adding accessible labels to buttons

## Components

- `App` - Provides cart state and dispatch through `CartContext`, and renders the product list and cart
- `CardsContainer` - Displays the available products
- `Cart` - Displays cart items, calculates totals, handles the empty state, and shows the order summary
- `CartCard` - Displays individual cart items and provides quantity controls and a remove button

## Tech Stack

- React
- JavaScript
- JSX
- Context API
- `useReducer`
- Tailwind CSS