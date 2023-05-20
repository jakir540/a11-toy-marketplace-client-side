import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title = `${title} - 7-twelve-toymart`
    },[title])
}


export default useTitle;