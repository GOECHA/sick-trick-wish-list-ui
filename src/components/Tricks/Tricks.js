import React from "react";
import Card from "../Card/Card";
import './Tricks.css'



const Tricks = ({tricks}) => {

const tricksCards = tricks.map(trick => {
    return (
        <Card 
          stance={trick.stance}
          name= {trick.name}
          obstacle= {trick.obstacle}
          tutorial= {trick.tutorial}
          id= {trick.id}
          key={trick.id}
        />
    )
})

    return (
        <div className='tricks-container'>
          {tricksCards}
        </div>
    )
}

export default Tricks;