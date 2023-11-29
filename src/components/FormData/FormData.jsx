import { useState } from "react";

const Form = ({ products, setProducts }) => {
  const [id, setId] = useState("");
  const [prName, setPrName] = useState("");
  const [prQuantity, setPrQuantity] = useState("");
  const [prPrice, setPrPrice] = useState("");
  const [prDescription, setPrDescription] = useState("");
  const [color, setColor] = useState("Black");

  const clearInputs = () => {
    setId("");
    setPrName("");
    setPrPrice("");
    setPrQuantity("");
    setPrDescription("");
    setColor("Black");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const product = {
      id,
      prName,
      prPrice,
      prQuantity,
      prDescription,
      color,
    };
    setProducts([...products, product]);
    clearInputs();
  };

  return (
    <div className="form-container">
      <form className="flex-column" action="submit" onSubmit={formSubmit}>
        <label htmlFor="pr-id">Product Id</label>
        <input
          id="pr-id"
          type="number"
          pattern="[0-9]*+"
          placeholder="Product Id"
          value={id}
          required
          onChange={(e) => setId(e.target.value)}
        />
        {/* {console.log(id)} */}
        <label htmlFor="pr-name">Product Name</label>
        <input
          id="pr-name"
          placeholder="Product Name"
          required
          value={prName}
          onChange={(e) => setPrName(e.target.value)}
        />
        {/* {console.log(prName)} */}
        <label htmlFor="pr-name">Product Price</label>
        <input
          id="pr-price"
          type="number"
          placeholder="Product Price"
          required
          value={prPrice}
          onChange={(e) => setPrPrice(e.target.value)}
        />

        <label htmlFor="pr-quantity">Quantity</label>
        <input
          id="pr-quantity"
          type="number"
          min={0}
          max={5}
          placeholder="Quantity"
          required
          value={prQuantity}
          onChange={(e) => setPrQuantity(e.target.value)}
        />
        {/* {console.log(prQuantity)} */}

        <label htmlFor="pr-desc">Description</label>
        <input
          id="pr-desc"
          type="text"
          placeholder="Description"
          required
          value={prDescription}
          onChange={(e) => setPrDescription(e.target.value)}
        />
        {/* {console.log(prDescription)} */}
        <label htmlFor="select-color">Choose a color</label>
        <select
          name="select-color"
          id="select-color"
          defaultValue={color}
          onChange={(e) => setColor(e.target.value)}
        >
          {/* {console.log(color)} */}
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Blue">Blue</option>
        </select>
        <input className="add-btn" type="submit" value="Add Product" />
        {/* {console.log(products)} */}
      </form>
    </div>
    
  );
};

export default Form;
