import React from "react";
import './HomePage.css'

export default function HomePage() {

    const onClick = () => {

        window.location.href="/pizza"
    }

    return (
        <div className="HomePageCont">
            <div>
                <h1>Lambda Eats</h1>
                <p>Pizza! Pizza!</p>
            </div>
            <button onClick={onClick} id="order-pizza">Order A Pizza</button>
        </div>
    )
}