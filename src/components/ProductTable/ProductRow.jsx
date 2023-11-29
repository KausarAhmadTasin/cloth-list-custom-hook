import { TiDelete } from "react-icons/ti";

const Table = ({ singleProduct, products, setProducts }) => {
    
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <tr>
      {/* key={singleProduct.id} className="prod-list" */}
      <td>{singleProduct.id}</td>
      <td>{singleProduct.prName}</td>
      <td>{singleProduct.prPrice}</td>
      <td>{singleProduct.prQuantity}</td>
      <td>{singleProduct.prDescription}</td>
      <td>{singleProduct.color}</td>
      <td onClick={() => deleteProduct(singleProduct.id)}>
        <div className="delete-circle">
          <TiDelete />
        </div>
      </td>
    </tr>
  );
};

export default Table;
