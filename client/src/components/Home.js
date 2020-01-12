import React from 'react'
import { store } from "../store";
import PhoneCard from "./PhoneCard";

function Home() {
    const { phones } = store.getState();
    console.log( phones )
    return (
        <React.Fragment>
        <h1>Phones</h1>
        <ul>
        {phones.map(phone=>{
return ( 
    <PhoneCard key={phone.id} props={phone}></PhoneCard>
)})}
</ul>
      </React.Fragment>
    )
}

export default Home
