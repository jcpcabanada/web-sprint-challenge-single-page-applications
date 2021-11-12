import React from "react";
import {Link} from "react-router-dom";
import './Head.css'

export default function Head() {

    return (
        <div className='head'>
            <Link className="Nav" to="/">Home Page</Link>
            <Link className="Nav" id='order-pizza'to="/pizza">Order Now!</Link>
        </div>
    )
}