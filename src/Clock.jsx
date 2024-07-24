import { useContext, useEffect } from "react"
import { useState } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock(){
    const language= useContext(LanguageContext);
    const [data , setDate] = useState(new Date())

   useEffect(()=>{
    console.log('Setting up clock interval')
    const intervalId = setInterval(()=>{
        console.log('Updating date...')
        setDate(new Date())
    }, 1000)
    return () =>{
        console.log('Clearing interval..')
        clearInterval(intervalId)
    }
   },[])

    return <div><h2>{language === 'en'? 'Current time' : 'Ora Corrente'}:{data.toLocaleTimeString()}</h2></div>
    
}