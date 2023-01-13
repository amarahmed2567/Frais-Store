import React,{useState,createContext} from 'react'
import Data from './shopeItem'
const DataContext = createContext()

export  function ContextData() {

        const [protucts,setprotucts] =useState(Data)
    return (
        <DataContext.Provider value={[protucts,setprotucts]}>
        {
            // protucts
        }
        </DataContext.Provider>
    )
}
