import React from "react"
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const CarDetails = (props) => {

  return (
      <div>
        <p> Transmission: {props.transmission} </p>
        <p> Mileage: {props.mileage} </p>
        <p> {props.description} </p>
        <img src={props.image} />
      </div>
    )

}

export default CarDetails


// <div>
//   <p> Transmission: {props.transmission} </p>
//   <p> Mileage: {props.mileage} </p>
//   <p> {props.description} </p>
//   <img src={props.image} />
// </div>
//
