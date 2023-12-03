// Import the ReactNode type from the 'react' library
import { type ReactNode } from "react";

// Define the props type for the Shop component
type ShopProps = {
  children: ReactNode;
};

// Define and export the Shop component
export default function Shop({ children }: ShopProps) {
  // Render the Shop component
  return (
    // Create a section with the id "shop"
    <section id="shop">
      {/* Display a heading for the shop */}
      <h2>Elegant Clothing For Everyone</h2>

      {/* Display an unordered list with the id "products" and render the children components */}
      <ul id="products">{children}</ul>
    </section>
  );
}
