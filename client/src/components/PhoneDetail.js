import React from 'react'
import { store } from "../store";

function PhoneDetail(props) {
    console.log(props)
    const { phones } = store.getState();
    const selectedPhone= phones[props.phoneID];
    console.log(selectedPhone)

    return (
        <React.Fragment>
            <h2>{selectedPhone.name}</h2>
            <img src={selectedPhone.imageFileName} alt=""/>
            <h3>{selectedPhone.price}€</h3>
            <p>{selectedPhone.description}</p>
        </React.Fragment>
        
    )
}

export default PhoneDetail
