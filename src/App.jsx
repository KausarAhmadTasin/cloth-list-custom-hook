/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/FormData/FormData";
import ProductTable from "./components/ProductTable/ClothTable";

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
// console.log(products)

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <div className="head-container">
        {/* <div className="text-center">
          <h1 className="app-title">Add New Product</h1>
          <p>Add and view your products using local storage</p>
        </div> */}
        <div className="main-container">

          <div className="functional-container">
            <Form products={products} setProducts={setProducts} />
            
            <div className="product-table">
              <ProductTable products={products} setProducts={setProducts} />
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
