import { useState } from "react"

export const Input = ({name,label,regex,setForm}) =>{
    const[value,setValue] = useState("");
    const[isMatch,setIsMatch] = useState(true);

    const onChange = (e) =>{
        const isMatch = e.target.value.match(regex);
        setIsMatch(!!isMatch);
        setValue(e.target.value);
        setForm(oldValue => ({...oldValue,[name]: e.target.value}));
    }
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          <input onChange={onChange} value={value} name={name}></input>
          {!isMatch &&<div>Не верный формат</div>}
        </div>
    )
}