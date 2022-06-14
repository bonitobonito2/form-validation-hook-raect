import { useState } from "react";


const InputHook = (type)=>{
    const [inputValue, setInputValue] = useState('')
    const[isTouched, setIsTouched] = useState(false)
    const [nameClassName,setNameClassName] = useState('form-control')  
    let isValid = false
    let inputIsvalid = isValid && isTouched
    const changeHandler = (event)=>{
        setIsTouched(true)
        setInputValue(event.target.value)
       
        if(type ==='name') isValid = inputValue.trim() !== '' && inputValue.length > 5
        
        if(type === 'email' ) isValid = inputValue.trim() !== '' && inputValue.includes("@")
        
        if(type === 'username') isValid = inputValue.trim() !== '' && inputValue.length > 5
        
        inputIsvalid = isValid && isTouched
        setNameClassName(inputIsvalid ? 'form-control ' : 'form-control invalid')
    }

    const lostFocus = ()=>{
        setIsTouched(true)
        if(type === 'name') isValid = inputValue.trim() !== '' && inputValue.length > 5
        
        if(type ===  'email' ) isValid = inputValue.trim() !== '' && inputValue.includes("@")
        
        if(type === 'username') isValid = inputValue.trim() !== '' && inputValue.length > 5
        inputIsvalid = isValid && isTouched
        setNameClassName(inputIsvalid ? 'form-control ' : 'form-control invalid')
    }
   
    return {
        inputValue : inputValue,
        changeHandlerFun: changeHandler,
        nameClassName : nameClassName,
        focusHandler : lostFocus
    }
}


export default InputHook