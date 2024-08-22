# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Packages installed
  - created react project using create vite@latest
  - for styling installed Tailwind css
  - for state management installed redux
  - for sliding bg-image installed swiper
  - for beautyfull notification installed toastify
  - for animation installed framer motion

-The website contains

- Header

  - Logo
  - Nav links (Home,shop,Accessories,pages,Blog)
  - Account
  - Cart icon to display how many products in the cart.

- Some Advertisement cards.

- Popular products

  - Product cards
    - product image
    - product price
    - product rating
    - on Hover product price will change to Add to cart
    - once user added to the cart it will change Remove from the cart

- Cart page

  - If user didn't added any product to the cart
  - but if user vist the cart page it will show "Your cart is empty. Please add the items to the cart."

  If user added the product to the cart page then follow the steps

  - On Header user can see cart icon once user clicked that Icon it will take the user to cart page
  - The cart page contains:
    - Main bg-image
    - clear cart button to delete all the cart
    - products that user added to the cart
      - product image
      - product description
      - price
      - quantity ( user can increase the quantity till 5 quantity)
      - total of product quantity and price
  - Finally total product price

- About this project :

I've completed a shopping website built with React for seamless user experience and dynamic functionality. For styling, I utilized Tailwind CSS to create a responsive and visually appealing design. To efficiently manage the state and data, I implemented Redux. This project has been a great opportunity to further refine my front-end development skills, especially in integrating modern tools and libraries to deliver a smooth, user-friendly interface.
