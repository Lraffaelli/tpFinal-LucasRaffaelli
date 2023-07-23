import { useState } from "react"

export const useCounter = (initialValue, stock) => {
    const[count,setCount]=useState(initialValue)

    const addCounter=() => {
        if(count<stock){
            setCount(count+1)
        }
    }

    const subCounter=() => {
        if(count>initialValue){
            setCount(count-1)
        }
    }

  return {count,addCounter,subCounter}
}

