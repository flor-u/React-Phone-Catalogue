import React from 'react';
import { Link } from "react-router-dom";

function PhoneCard(props) {
    console.log(props)
    return (
        <React.Fragment>
        <div className='d-flex flex-column justify-content-center card'>
        <div className='d-flex align-self-center fixed-heigh'>
            <img src={props.props.imageFileName} alt={props.props.name} className="phone-list" />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
           <Link class="card-title text-reset" to={"/phone/"+ props.props.id}> <h2 class="card-title text-center" >{props.props.name}</h2></Link>
            <h3 class="card-title text-center" >{props.props.price}€</h3>
            </div>
            </div>
        </React.Fragment>
    )
}

export default PhoneCard
