# React Theme Switcher — Context API

A simple React project where I built a theme switcher using the Context API.

I built this project to understand how Context API works and how it can be used to share data between components without passing props through every component.

## About the Project

The project has a light and dark theme that can be changed using a theme button.

The theme state is stored inside a `ThemeProvider` and shared with the components that need it.

Instead of passing the theme and the function to change it through props, the components use the Context API to access them directly.

I also created a custom `useTheme` hook to make accessing the theme context easier.

## What I Learned

While building this project, I learned:

- What the Context API is

- Why Context API is useful

- The problem of prop drilling

- How `createContext()` works

- How `useContext()` gets values from a context

- How to create a Context Provider

- Why the Provider needs to wrap the components that use the context

- How values are shared through `ThemeContext.Provider`

- How a custom `useTheme()` hook works

- How changing context state causes the components using that context to re-render

- How component structure can be kept clean by separating components into different files

- Using Tailwind CSS for styling

## Components

### `App`

This is the main component of the project.

It wraps the application inside `ThemeProvider` so that the components inside it can access the theme context.

It also renders the `Navbar`, `ThemeButton`, `Main`, and `Footer` components.

### `ThemeProvider`

This component manages the theme state.

It stores whether the current theme is light or dark and provides the theme and the function used to change it through the context.

The components inside `ThemeProvider` can access these values without receiving them through props.

### `Navbar`

The navbar uses the theme from the context to change its appearance based on the current theme.

It doesn't need to receive the theme as a prop because it gets the value directly from the context.

### `ThemeButton`

This component contains the button used to change the theme.

It uses the `useTheme()` hook to access the current theme and the function that changes it.

### `Main`

This component represents the main content of the page.

It also uses the theme from the context so its styling changes when the theme changes.

### `Footer`

The footer also gets the theme from the context and changes its appearance based on the current theme.

## Important Part

The main thing I understood from this project is how Context API avoids prop drilling.

Without Context API:

`App`

↓

passes theme to `Navbar`

↓

passes theme to another component

↓

passes theme again

↓

component finally uses it

With Context API:

`ThemeProvider`

↓

provides theme

↓

`Navbar` → gets theme directly

`ThemeButton` → gets theme directly

`Main` → gets theme directly

`Footer` → gets theme directly

The important part is that the components don't need to receive the theme through props.

They can access it directly using `useContext()` or the custom `useTheme()` hook.

## Custom `useTheme` Hook

I also created a small custom hook:

```js
export function useTheme() {
  return useContext(ThemeContext);
}