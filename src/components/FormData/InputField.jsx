import "./InputField.css"
const InputField = ({type = "Text", placeholder, value, setValue,  labelTitle}) => {
//   console.log(hfor)
    return (
    <>
        <label>
          {labelTitle}
          <input className="input-box"
            // id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            
            onChange={(e) => setValue(e.target.value)}
            />
            </label>
    </>
  )
}

export default InputField