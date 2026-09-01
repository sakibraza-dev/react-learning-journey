# Registration Form

A registration form built with React and JSX.

This project was created to understand how forms work in React, including controlled inputs, form state, validation, reusable components, and user-friendly error messages.

## About the Project

The registration form contains:

- Name
- Email
- Password
- Confirm Password
- Age
- Gender
- Country
- Terms & Conditions agreement
- Password show/hide feature
- Form validation
- Error messages

The project uses reusable React components to structure and manage the form UI.

## What I Learned

- Controlled inputs
- `value` + `onChange`
- Form state using `useState`
- Updating objects in state
- `onSubmit`
- `e.preventDefault()`
- Form validation
- Required field validation
- Regex validation
- Password confirmation validation
- Number validation
- Radio button handling
- Checkbox handling
- Select inputs
- Error state
- Showing field-specific error messages
- Conditional rendering
- Reusable components
- Passing props between components
- Password show/hide functionality
- Tailwind CSS for form UI

## Components

- `Input` - Reusable input component for text, email, number, and password fields
- `Gender` - Reusable radio button component for gender selection
- `Select` - Reusable select component for country selection
- `App` - Manages form state, validation, submission, and overall form structure

## Validation

The form validates:

- Name is required
- Name should contain only letters and spaces
- Email is required
- Email format is checked using Regex
- Password is required
- Password must be at least 8 characters
- Confirm password is required
- Confirm password must match the password
- Age is required
- User must be at least 18 years old
- Gender must be selected
- Country must be selected
- Terms & Conditions must be accepted

## Tech Stack

- React
- JavaScript
- JSX
- Tailwind CSS