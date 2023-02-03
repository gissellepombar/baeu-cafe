import { useState } from "react";
export default function Menu(){
    const [coffees, setCoffees] = useState()
    const getCoffees = (temp) => {
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
                ? <h2>Welcome to the Beau Café</h2>
                : <ul>
                    {coffees.map( coffee => (
                        <li key={coffee.id}>{coffee.title}</li>
                    ) )}
                </ul>
            }
        </ article>
    );
}