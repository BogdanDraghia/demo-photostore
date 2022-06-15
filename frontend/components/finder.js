import React, {useState} from "react"
import style from "../styles/components.module.css"


const Finder = ()=>{
    const[code,setCode]= useState("null")
    const handleSubmit = ()=>{
        console.log(code+ " - submited")
    }
    const handleChange = (event)=>{
        setCode(event.target.value)
    }
    return(
        <div className={style.finderContainer}>

                <div className={style.finderLabel}>
                    Introdu el codigo recibido
                </div>
            <div className={style.finderSubContainer}>
                <input  className={style.finderInput}type="text" placeholder="ejemplo: 12Ad3" onChange={handleChange} />
                <button className={style.finderButton} type="submit" onClick={handleSubmit}>{"Buscar"}</button>
            </div>
        </div>
    )
}

export default Finder