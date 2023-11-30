/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import InputField from "./InputField";
import "./FormData.css"

const Form = ({ products, setProducts }) => {
  const [id, setId] = useState("");
  const [prName, setPrName] = useState("");
  const [prQuantity, setPrQuantity] = useState("");
  const [prPrice, setPrPrice] = useState("");
  const [prDescription, setPrDescription] = useState("");
  const [color, setColor] = useState("Black");
  const [size, setSize] = useState();
  const [date, setDate] = useState();
  const [agree, setAgree] = useState(false);
 
  const clearInputs = () => {
    setId("");
    setPrName("");
    setPrPrice("");
    setPrQuantity("");
    setPrDescription("");
    setColor("Black");
    setDate();
    setAgree(false);
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
      size,
      date
    };
    setProducts([...products, product]);
    clearInputs();
  };

  const agreeHandle = (e)=> {
    e.preventDefault();
    setAgree(!agree);
  }

  return (
    <div className="form-container">
      <form className="flex-column" action="submit" onSubmit={formSubmit}>
    
        <div className="divider">
        <div className="left-column">
            <InputField className="mock-class" min={0} labelTitle={"Cloth Id "} type={"number"} placeholder={"Cloth Id"} value={id} setValue= {setId}/>
            <InputField   labelTitle={"Cloth Name "} placeholder={"Cloth Name"} value={prName} setValue= {setPrName}/> 
            <label style={{display: "flex", flexDirection: "column"}}>
              Description: 
              <textarea placeholder="Cloth Description" value={prDescription} onChange={(e) => setPrDescription(e.target.value)}/>
            </label>
          </div>

          <div className="right-column">
            <InputField  labelTitle={"Price "}  min={0} type={"number"} placeholder={"Cloth Price"} value={prPrice} setValue= {setPrPrice}/>
            <InputField  labelTitle={"Quantity "}  min={0} max= {5} type={"number"} placeholder={"Quantity"} value={prQuantity} setValue= {setPrQuantity}/>
            
            {/* Color selection dropdown */}
            <label htmlFor="select-color">Choose a color </label>
            <select
              name="select-color"
              id="select-color"
              defaultValue={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
            
            {/* Size selection radio */}
            <div className="radio-select">
              <label htmlFor="M">Select Size: </label>
              <input type="radio" id="M" name="size" value="Medium" onChange={(e)=> setSize(e.target.value)}/>
              <label htmlFor="M">M</label><br />
              
              <input type="radio" id="L" name="size" value="Large" onChange={(e)=> setSize(e.target.value)}/>
              <label htmlFor="L">L</label><br/>

              <input type="radio" id="XL" name="size" value="Extra Large" onChange={(e)=> setSize(e.target.value)}/>
              <label htmlFor="XL">XL</label> 
            </div>
            <div className="date-select">
              <label htmlFor="Manufacture">Manufacturing Date: </label>
              <input type="date" id="Manufacture" name="Manufacture" required onChange={(e)=> setDate(e.target.value)}/>
            </div>
          </div>
        </div>


        {/* Terms and conditon checkbox */}
        <input type="checkbox" id="terms-agree" name="terms-agree" required onChange={agreeHandle}/>
        <label htmlFor="terms-agree">I agree with the terms and conditions.</label><br />
        {/* {console.log(agree ? "Agree" : "Not agree")} */}

        {/* Form submit button */}
        <input className="add-btn" type="submit" value="Add Product" />
      </form>
    </div>
    
  );
};

export default Form;
