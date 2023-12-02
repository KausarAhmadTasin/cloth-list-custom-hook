/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/FormData/FormData";
import ClothTable from "./components/ProductTable/ClothTable";
function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  // console.log(products)

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <div className="head-container">
        
        <div className="main-container">
          <div className="functional-container">
            
            <Form products={products} setProducts={setProducts} />
          
            {products.length <= 0 ? (
              <h2 className="item-center">No cloth added yet!...</h2>
            ) 
            : 
            (
              <div className="product-table">
                <ClothTable products={products} setProducts={setProducts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
