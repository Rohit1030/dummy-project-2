import React from "react";
import './Card.css';
export default function Card(props){
    return (
        <div className="container">
            <div className="img-price" style={
                {
                    backgroundImage: `url(${props.image})`, 
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }
                }>
            </div>
            <h4 className="header-title">{props.title}</h4>
            <h4 className="header-price">Rs. {props.price}</h4>
            <button className="add-btn">ADD TO CART</button>
        </div>
    );
}