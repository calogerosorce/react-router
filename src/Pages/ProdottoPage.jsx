import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export default function ProdottoPage() {

    const api = `https://fakestoreapi.com/products/${id}`
    const [charat, setCharat] = useState([])
    const { id } = useParams()

    function getArray() {
        axios.get(api)
            .then(res => {
                setCharat(res.data)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getArray()
    }, [])

    return (
        <>
            <h1>prodotto</h1>
        </>
    )
}