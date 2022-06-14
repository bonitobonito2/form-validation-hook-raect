import InputHook from "../hooks/inputHook";
import { useEffect,useState } from "react";
const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)
  const {
      inputValue : nameInput,
      nameClassName : className,
      changeHandlerFun : nameChangeHandler,
      focusHandler:lostFocusName} = InputHook('name')

  const {
      inputValue : emailInput,
      nameClassName : classEmail,
      changeHandlerFun : emailChangeHandler,
      focusHandler:lostFocusEmail} = InputHook('email')

  const {
      inputValue : lastnameInput,
      nameClassName : classLastname,
      changeHandlerFun : lastnameChangeHandler,
      focusHandler:lostFocusLastname} = InputHook('username')   

  const checkFormValidation = ()=>{
      if(className.trim() === 'form-control' && classEmail.trim() === 'form-control' && classLastname.trim() === 'form-control'){
        if(lastnameInput.length !== 0 && nameInput.length !== 0 && emailInput.length !== 0){ 
          setFormIsValid(true)
          return
        }
      }
     setFormIsValid(false)
  }

 const submitHandler = (event)=>{
  event.preventDefault()
  alert('form is submited')
 }

  useEffect(()=>{
    checkFormValidation()
  },[className,classEmail,classLastname]) 

  let buttonClassName = formIsValid ?  'form-actions' : 'form-actions disabled'
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={ className}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={lostFocusName}  onChange={nameChangeHandler} type='text' id='name' />
        </div>
        <div className={classLastname}>
          <label htmlFor='name'>Last Name</label>
          <input onBlur={lostFocusLastname} onChange={lastnameChangeHandler} type='text' id='name' />
        </div>
      </div>
      <div className={classEmail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onBlur={lostFocusEmail} onChange={emailChangeHandler} type='text' id='name' />
      </div>
      <div className={buttonClassName}>
        <button disabled = {!formIsValid }  >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
