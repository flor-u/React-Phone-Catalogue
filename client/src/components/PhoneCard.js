import React from 'react';
import { Link } from "react-router-dom";

function PhoneCard(props) {
    console.log(props)
    return (
        <React.Fragment>
            <img src={props.props.imageFileName} alt=""/>
           <Link to={"/phone/"+ props.props.id}> <h2>{props.props.name}</h2></Link>
            <h3>{props.props.price}€</h3>
        </React.Fragment>
    )
}

export default PhoneCard
