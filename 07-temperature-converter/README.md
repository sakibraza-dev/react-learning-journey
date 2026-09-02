# Temperature Converter

A simple temperature converter built with React and JSX.

I built this project to understand how to share state between components and how a parent component can control the state used by its child components.

## About the Project

The app converts temperatures between Celsius and Fahrenheit.

Both inputs are connected to the same state, so when a value is changed in one input, the other one updates automatically.

The project also uses a single reusable component for both temperature inputs instead of creating separate Celsius and Fahrenheit components.

## What I Learned

While building this project, I learned:

- Lifting state up
- Sharing state between components
- Keeping shared state in the parent component
- Parent-to-child communication using props
- Child-to-parent communication using callback functions
- Using the parent as the source
- Creating reusable components
- Passing different values through props
- Calculating derived values from state
- Using `clamp()` for responsive spacing
- Using Tailwind CSS for styling

## Components

### `TemperatureConverter`

This is the parent component.

It stores the temperature and keeps track of which unit is currently being edited.

It passes the state and callback functions to the `TemperatureInput` component.

### `TemperatureInput`

A reusable component used for both Celsius and Fahrenheit.

Instead of making two separate components, I used props to change the behavior of the component depending on the unit.

For example, the same component can be used like:

```jsx
<TemperatureInput unit="Celsius" />
<TemperatureInput unit="Fahrenheit" />