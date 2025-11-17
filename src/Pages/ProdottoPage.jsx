import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export default function ProdottoPage() {

    const { id } = useParams()
    const api = `https://fakestoreapi.com/products/${id}`
    const [charat, setCharat] = useState([])

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
        <div className="container p-5">
            <div className="single">
                <img src={charat.image} alt="" />
                <h2><strong>{charat.category}</strong></h2>
                <p>{charat.description}</p>
                <div className="price">
                    <h3 className="p-3">{charat.price}€</h3>
                    <button>AGGIUNGI AL CARRELLO</button>
                </div>
            </div>
        </div>
    )
}