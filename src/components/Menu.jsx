import { useState } from "react";
import "./menu.css"

export default function Menu(){
    const [message, setMessage] = useState('Welcome to Beau Café')
    const [coffees, setCoffees] = useState()
    const getCoffees = (temp) => {
        setMessage(`Loading...`)
        fetch(`https://api.sampleapis.com/coffee/${temp}`)
        .then(res => res.json())
        //.then(data => setCoffees(data)) same as below** you are returning res.json() and naming it data and passing it through setCoffees
        .then(setCoffees)
        .catch(alert)
    }
    return (
        <article>
            <div>
                <button onClick={() => getCoffees('hot')}>Hot Coffees</button>
                <button onClick={() => getCoffees('iced')}>Iced Coffees</button>
            </div>
            {!coffees
                ? <h2>{message}</h2>
                : <section className="coffee-container">
                    {coffees.map( coffee => (
                        <div key={coffee.id} className="coffee-card">
                            <img src={coffee.image} alt={coffee.title} />
                            <h3> {coffee.title}</h3>
                            <p>{coffee.description}</p>
                        </div>
                    ) )}
                </section>
            }
        </ article>
    );
}