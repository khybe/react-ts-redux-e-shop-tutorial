// Import the Provider component from the "react-redux" library
import { Provider } from "react-redux";

// Import custom components
import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";

// Import dummy product data
import { DUMMY_PRODUCTS } from "./dummy-products.ts";

// Import the Redux store
import { store } from "./store/store.ts";

// Main App component
function App() {
  // Render the App component
  return (
    // Use the Redux Provider to make the store available to nested components
    <Provider store={store}>
      {/* Display the Header component */}
      <Header />

      {/* Display the Shop component */}
      <Shop>
        {/* Map through the dummy products and display each as a Product component */}
        {DUMMY_PRODUCTS.map((product) => (
          // Set a unique key for each product based on its ID
          <li key={product.id}>
            {/* Display the Product component with the properties of the current product */}
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

// Export the App component as the default export
export default App;
