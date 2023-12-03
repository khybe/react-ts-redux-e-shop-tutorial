// Import types and actions from the "../store/cart-slice.ts" file
import {
  type CartItem,
  addToCart,
  removeFromCart,
} from "../store/cart-slice.ts";

// Import hooks from the "../store/hooks.ts" file
import { useAppSelector, useAppDispatch } from "../store/hooks.ts";

// Define and export the CartItems component
export default function CartItems() {
  // Select the cart items from the Redux store state using useAppSelector
  const cartItems = useAppSelector((state) => state.cart.items);

  // Get the dispatch function using useAppDispatch
  const dispatch = useAppDispatch();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );

  // Format the total price with two decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  // Function to handle adding an item to the cart
  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  // Function to handle removing an item from the cart
  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  // Render the CartItems component
  return (
    <div id="cart">
      {/* Display a message if there are no items in the cart */}
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {/* Display the cart items if there are items in the cart */}
      {cartItems.length > 0 && (
        <ul id="cart-items">
          {cartItems.map((item) => {
            // Format the price for each item with two decimal places
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  {/* Display the item title and formatted price */}
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  {/* Button to remove one quantity of the item from the cart */}
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  {/* Display the quantity of the item in the cart */}
                  <span>{item.quantity}</span>
                  {/* Button to add one quantity of the item to the cart */}
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {/* Display the total price of items in the cart */}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
