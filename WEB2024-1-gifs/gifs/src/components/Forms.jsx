import { useState, useCallback } from "react"
import debounce from 'just-debounce-it'
import SearchIcon from '../icons/search.svg'

export function Forms({onSubmit}){
    const [value, setValue] = useState('')

    const debounceit = useCallback(
        debounce ((e)=>{
          onSubmit(e)
        },500),
       [onSubmit]
      ) 

    const getValue = (e) => {
        setValue(e.target.value)
        debounceit(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(value)
    }
    

    return(
        // <form onSubmit={handleSubmit}>
        //     <input type="text"
        //         value={value}
        //         onChange={getValue}
        //         placeholder="Search a gif"/>
        //     <button type="submit">Search</button>
        // </form>

        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input value={value} onChange={getValue} type="text" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

    )
}