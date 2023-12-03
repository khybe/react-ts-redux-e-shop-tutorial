// Import the addToCart action creator from the "../store/cart-slice" file
import { addToCart } from "../store/cart-slice";

// Import the useAppDispatch hook from the "../store/hooks" file
import { useAppDispatch } from "../store/hooks";

// Define the props type for the Product component
type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

// Define and export the Product component
export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  // Use the useAppDispatch hook to get the dispatch function
  const dispatch = useAppDispatch();

  // Function to handle adding the product to the cart
  function handleAddToCart() {
    // Dispatch the addToCart action with the product details
    dispatch(
      addToCart({
        id,
        title,
        price,
      })
    );
  }

  // Render the Product component
  return (
    <article className="product">
      {/* Display the product image with alt text */}
      <img src={image} alt={title} />

      <div className="product-content">
        <div>
          {/* Display the product title */}
          <h3>{title}</h3>

          {/* Display the product price */}
          <p className="product-price">${price}</p>

          {/* Display the product description */}
          <p>{description}</p>
        </div>

        {/* Display the "Add to Cart" button with an onClick handler */}
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
