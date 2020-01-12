import React from 'react'
import { store } from "../store";

function PhoneDetail(props) {
    console.log(props)
    const { phones } = store.getState();
    const selectedPhone= phones[props.phoneID];
    console.log(selectedPhone)

    return (
        <React.Fragment>
           {/* <div className="no-border">
  <img src={selectedPhone.imageFileName} className="phone-detail" alt={selectedPhone.name}/>
  <div className="card-body">
    <h4 className="card-title">{selectedPhone.name}</h4>
    <h5 className="card-title">{selectedPhone.price}€</h5>
    <p className="card-text">{selectedPhone.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Manufactured by {selectedPhone.manufacturer}</li>
    <li className="list-group-item">{selectedPhone.screen} screen</li>
    <li className="list-group-item">{selectedPhone.processor} processor</li>
<li className="list-group-item">{selectedPhone.ram}GB ram</li>
  </ul>
</div> */}

<div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
    
  <img src={selectedPhone.imageFileName}  className="phone-detail" alt={selectedPhone.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h4 className="card-title">{selectedPhone.name}</h4>
        <h5 className="card-title">{selectedPhone.price}€</h5>
        <p className="card-text">{selectedPhone.description}</p>        
        <p className="card-text"><small class="text-muted">Manufactured by {selectedPhone.manufacturer}</small></p>
      </div>
    </div>
  </div>
</div>
        </React.Fragment>
        
    )
}

export default PhoneDetail


