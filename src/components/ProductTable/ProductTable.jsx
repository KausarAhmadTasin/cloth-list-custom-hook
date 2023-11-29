import ProductRow from "../ProductTable/ProductRow";

const ProductTable = ({ products, setProducts }) => {
  return (
    <div className="table">
      <table className="view-table">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Color</th>
            <th>remove</th>
          </tr>
        </thead>

        <tbody>
          {products.map((singleProduct) => (
            <ProductRow
              key={singleProduct.id}
              singleProduct={singleProduct}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </tbody>
      </table>
      <button onClick={() => setProducts([])}>Remove All</button>
    </div>
    
  );
};

export default ProductTable;
