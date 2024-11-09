# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img width="750" alt="Finish project" src="https://github.com/user-attachments/assets/4704025f-abd1-4b53-93b8-043bebc4b3ab">


### Links

- Solution URL: [PENDIENTE](https://your-solution-url.com)
- Live Site URL: [See result](https://xahep.github.io/product-list-with-cart/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - Framework utility-first
- [Redux Toolkit](https://redux-toolkit.js.org/) - Utilities to simplify common use cases like store setup

### Features

This project uses Redux Toolkit for global state management, allowing all components to interact with a shared store. Specifically, I centralized the cart functionality so that any component can access and update it as needed. While effective, this approach could be improved; for instance, the cart could have its own isolated state rather than sharing the store with the product list, as in my current setup where the product list also acts as a cart.

Additionally, I customized the mobile design by adding a floating button in the bottom left corner, making the experience more fluid on smaller screens. I also implemented logic to close modals on mobile, enhancing usability and ensuring smooth interactions on touch devices.

## Author

- Frontend Mentor - [@xahep](https://www.frontendmentor.io/profile/Xahep)
- Twitter - [@XahepDuran](https://twitter.com/XahepDuran)
