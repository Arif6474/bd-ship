import axios from "axios"
import { useEffect, useState } from "react"
import { NEWSES_API } from "../Utilities/APIs"

const useNews =()=>{
    const [newsEvents, setNewsEvents] = useState([])
 
    useEffect(() => {
      const getNewsEvents =async() => {
            const { data } = await axios.get(NEWSES_API)
            setNewsEvents(data)
        }
        getNewsEvents()
    }, [])
    return [newsEvents, setNewsEvents];
}
export default useNews;