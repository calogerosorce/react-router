import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Helix } from 'ldrs/react'
import 'ldrs/react/Helix.css'



export default function ProdottoPage() {


    let { id, "*": rest } = useParams()
    const [charat, setCharat] = useState({})
    const [loading, setLoading] = useState(true)
    const api = `https://fakestoreapi.com/products/${id}`
    function getArray() {
        axios.get(api)
            .then(res => {
                setCharat(res.data)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        getArray()
    }, [id])

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Helix
                    size="45"
                    speed="2.5"
                    color="black"
                />
            </div>
        )
    }

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