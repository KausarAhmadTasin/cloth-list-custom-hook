/* eslint-disable no-irregular-whitespace */
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
        <label htmlFor="pr-id">Cloth Id</label>
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
        <label htmlFor="pr-name">Cloth Name</label>
        <input
          id="pr-name"
          placeholder="Product Name"
          required
          value={prName}
          onChange={(e) => setPrName(e.target.value)}
        />
        {/* {console.log(prName)} */}
        <label htmlFor="pr-name">Price</label>
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
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>

        <br />        
        <input type="radio" id="M" name="size" value="M" />
        <label htmlFor="M">M</label><br />

        <input type="radio" id="L" name="size" value="L"/>
        <label htmlFor="L">L</label><br/>

        <input type="radio" id="XL" name="size" value="XL"/>
        <label htmlFor="XL">XL</label> 
        <br />

        <label htmlFor="Manufacture">Manufacturing Date</label>
        <input type="date" id="Manufacture" name="Manufacture" />

        <input type="checkbox" id="terms-agree" name="terms-agree" value="agree" />
        <label htmlFor="terms-agree">I agree with the terms and conditions.</label><br />

        <input className="add-btn" type="submit" value="Add Product" />
        {/* {console.log(products)} */}
      </form>
    </div>
    
  );
};

export default Form;
