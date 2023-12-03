// Import the useState hook from the "react" library
import { useState } from "react";

// Import the Cart component from the "./Cart.tsx" file
import Cart from "./Cart.tsx";

// Import the useAppSelector hook from the "../store/hooks.ts" file
import { useAppSelector } from "../store/hooks.ts";

// Define and export the Header component
export default function Header() {
  // State to manage the visibility of the cart
  const [cartIsVisible, setCartIsVisible] = useState(false);

  // Select the cartQuantity from the Redux store state using useAppSelector
  const cartQuantity = useAppSelector((state) =>
    state.cart.items.reduce((val, item) => val + item.quantity, 0)
  );

  // Function to handle opening the cart
  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  // Function to handle closing the cart
  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  // Render the Header component
  return (
    <>
      {/* Display the Cart component if cartIsVisible is true */}
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}

      {/* Header section */}
      <header id="main-header">
        <div id="main-title">
          {/* Display the logo image and the title */}
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>

        {/* Display the Cart button with the cart quantity and an onClick handler */}
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
