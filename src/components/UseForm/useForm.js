import { useState } from "react"

export default useForm = () => {
    const [state, setSate] = useState({});
    
    const handleChange = (e) => {
        setSate(state=>  ({...state, [e.target.name]: e.target.value}));
    }

    return [state, handleChange];
}