import axios from "axios";
import { useEffect, useState } from "react"
import { ApiResponseEpisodes, AllData } from "../types";

export const useFetch = <T,> (url: string) => {
    const [ data, setData ] = useState<T>();
    const [ error, setError ] = useState<string>();
    const [ isLoading, setIsLoding ] = useState(true);

    const getData = async() => {
        try{
            const response = await axios.get(url)
            setData(response.data)
            setIsLoding(false)
        }catch (error) {
            setError(`Error al obtener los datos`)
            setIsLoding(false)
          }
    }

    useEffect(() => {
        getData()
    },[url])

    return {
        data,
        error,
        isLoading
    }
}