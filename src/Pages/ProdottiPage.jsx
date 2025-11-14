import { useState } from "react"
import Card from "../components/Card"
import axios from "axios"


export default function ProdottiPage() {

    const api = 'https://fakestoreapi.com/products'
    const [charat, setCharat] = useState([])
    axios.get(api)
        .then(res => {
            setCharat(res.data)
        }).catch(err => console.log(err))


    return (
        <>
            <h1>ACQUISTA CIO' CHE TI RENDE FELICE</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {charat.map(items => (
                        <Card key={items.id} title={items.title} image={items.image} category={items.category} price={items.price} />
                    ))}
                </div>
            </div>
        </>
    )
}