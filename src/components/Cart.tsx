// Import createPortal function from 'react-dom' for rendering content outside the root DOM element
import { createPortal } from "react-dom";

// Import CartItems component from './CartItems.tsx'
import CartItems from "./CartItems.tsx";

// Define the props type for the Cart component
type CartProps = {
  onClose: () => void;
};

// Define and export the Cart component
export default function Cart({ onClose }: CartProps) {
  // Use createPortal to render the cart outside the root DOM element
  return createPortal(
    // JSX representing the cart
    <>
      {/* Semi-transparent backdrop for the cart */}
      <div className="cart-backdrop" />

      {/* Modal dialog for the cart */}
      <dialog id="cart-modal" open>
        {/* Heading for the cart */}
        <h2>Your Cart</h2>

        {/* Display the cart items using the CartItems component */}
        <CartItems />

        {/* Actions in the cart, such as closing it */}
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    // Specify the target DOM element for rendering the portal
    document.getElementById("modal")!
  );
}
