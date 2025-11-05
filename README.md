# LearnIT (React + Firebase)

LearnIT is a fully responsive e-commerce web application for a fictional IT bookstore. It was built from scratch to demonstrate a modern frontend stack, state management, and backend integration.

The entire UI is built with Material-UI (MUI).

## Key Features

- **Dynamic Product Catalog:** Products are fetched asynchronously from a **Firebase (Firestore)** database.
- **Client-Side Routing:** Uses **React Router** for seamless navigation between the homepage, categories, product details, and the cart.
- **Live Search & Filtering:**
  - A functional **search bar** in the Navbar that filters products by title or author.
  - A **category menu** that filters the product list dynamically.
- **Global State Management:** The shopping cart is built using the **React Context API**, allowing state to be managed globally across all components.
- **Modern UI/UX:**
  - A "Hide on Scroll" app bar for a better browsing experience on mobile.
  - A clean, responsive card layout with fixed-height cards and text truncation ("ellipsis") to handle titles of varying lengths.
  - A custom-themed footer that is "sticky" to the bottom of the viewport.
- **Secure API Keys:** All Firebase API keys are stored securely in a `.env` file and are not exposed in the GitHub repository.

## Tech Stack

- **Frontend:** React.js
- **UI Library:** Material-UI (MUI)
- **Routing:** React Router
- **State Management:** React Context
- **Backend:** Firebase (Firestore Database)
