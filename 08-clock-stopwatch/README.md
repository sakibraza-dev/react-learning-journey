# useEffect — Clock / Stopwatch

A simple clock and stopwatch built with React and JSX.

I built this project to understand how `useEffect` works and how it can be used with timers. I also learned how cleanup functions work when starting and stopping an interval.

## About the Project

The project contains a real-time clock and a stopwatch.

The clock shows the current time and updates every second using `setInterval`.

The stopwatch can be started, stopped, and reset. It keeps track of the time passed in seconds and then calculates the hours, minutes, and seconds to display.

## What I Learned

While building this project, I learned:

- What an effect is
- How `useEffect` works
- How the dependency array controls when an effect runs
- The difference between `[]` and `[dependency]`
- Using `setInterval` inside `useEffect`
- Cleaning up an interval using `clearInterval`
- Why cleanup runs before an effect runs again
- How cleanup works when a component unmounts
- Using functional state updates with `prev`
- Avoiding state updates directly during rendering
- Keeping one state value and calculating derived values from it
- Using `Math.floor()` and `%` to calculate hours, minutes, and seconds
- Using `padStart()` to format the timer
- Using `clamp()` for responsive font sizes
- Using Tailwind CSS for styling

## Components

### `App`

This is the main component.

It stores the current time and uses `useEffect` to update the clock every second.

It also renders the `Clock` and `Stopwatch` components.

### `Clock`

This component displays the current time received from the `App` component through props.

It converts the 24-hour time into a 12-hour format and displays the AM/PM period.

### `Stopwatch`

This component handles the stopwatch logic.

It stores the time passed in seconds and uses `useEffect` to start an interval when the stopwatch is running.

When the stopwatch is stopped, the cleanup function clears the interval.

The hours, minutes, and seconds are calculated from the single `timer` state instead of storing them separately.

## Important Part

The main thing I understood from this project is that the cleanup function returned by `useEffect` is stored by React.

When the dependency changes, React first runs the cleanup from the previous effect and then runs the effect again.

For the stopwatch:

Start  
↓  
state changes to `true`  
↓  
effect runs  
↓  
interval starts  
↓  
cleanup is stored  
↓  
Stop  
↓  
old cleanup runs  
↓  
interval is cleared
