import React from 'react'
import { store } from "../store";
import PhoneCard from "./PhoneCard";

function Home() {
    const { phones } = store.getState();
    console.log( phones )
    return (
        <React.Fragment>
        <div className='section-hero'>
        <h1 className="text-center">Phones</h1>
        </div>
        <div>
        <ul className='d-flex flex-row justify-content-around flex-wrap'>
        {phones.map(phone=>{
return ( 
    <PhoneCard key={phone.id} props={phone}></PhoneCard>
)})}
</ul>
</div>
      </React.Fragment>
    )
}

export default Home
