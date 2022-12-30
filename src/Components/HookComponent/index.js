import React, { useState, useEffect } from "react"
export default function BusinessNews(){

   const [name,setName] = useState('Atharva')

   const changeName = () => {

            setName('Yogesh')

   }

   return(
    <div>
        <h1> My name is {name} </h1>
        <input type="text" />
        <button onClick={changeName}> Submit </button>
    </div>
   )

} 