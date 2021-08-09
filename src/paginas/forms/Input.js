import React from "react"
import style from "./Input.module.css"


function Input({label,place,type,name,value , onChange,error,onBlur}) {
  return (
    <div className={style.wrapper}>
      <label htmlFor={name} className={style.label}>{label}</label>
      <input  
      className={style.input}
      id={name}
      onChange={onChange}
      value={value}
      name={name} 
      placeholder={place}
      onBlur={onBlur} 
      type={type}/>
      {error && <p className={style.error}>{error}</p>}
    </div>
    )
}

export default Input;