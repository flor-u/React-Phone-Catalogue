import React from 'react';
import { Link } from "react-router-dom";
import { store } from "../store";
import { selectedPhone } from "../actions";

function PhoneCard(props) {
    console.log(props)
    
    const setSelectedPhone= (id) => {
        console.log(id)
        store.dispatch(selectedPhone(id));
      }

    return (
        <React.Fragment>
        <div className='d-flex flex-column justify-content-center phone-card'>

        <h2>{props.props.name}</h2>
        <div className='d-flex align-self-center'>
            <img src={props.props.imageFileName} alt={props.props.name} className="phone-list" />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
            <h3 className="card-title text-center" >{props.props.price}€</h3>
           <Link className="card-title text-reset" to={"/phone/"+ props.props.id} onClick={id =>setSelectedPhone(props.props.id)}> <button>See more</button></Link>
            </div>
            </div>
        </React.Fragment>
    )
}

export default PhoneCard
