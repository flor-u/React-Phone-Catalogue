import React from 'react'
import { store } from "../store";
import { Link } from 'react-router-dom';


function PhoneDetail() {
    const { selectedPhone} = store.getState();
    console.log(selectedPhone)

    return (
        <React.Fragment>
<div className="mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
    
  <img src={selectedPhone.imageFileName}  className="phone-detail" alt={selectedPhone.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h4 className="title">{selectedPhone.name}</h4>
        <h5 className="price">{selectedPhone.price}€</h5>
        <p className="card-text text-left">{selectedPhone.description}</p>        
        <p className="card-text text-left"><small className="text-muted">Manufactured by {selectedPhone.manufacturer}</small></p>
        <h3 className="text-left"><b>Technical specs</b></h3>
        <ul>
          <li className="text-muted small">Color: {selectedPhone.color}</li>
          <li className="text-muted small">{selectedPhone.screen} screen</li>
          <li className="text-muted small">{selectedPhone.processor} processor</li>
          <li className="text-muted small">{selectedPhone.ram}GB ram</li>
        </ul>
      </div>
      <Link to='/' className="card-text text-left">Back </Link>

    </div>
  </div>
</div>
        </React.Fragment>
        
    )
}

export default PhoneDetail


