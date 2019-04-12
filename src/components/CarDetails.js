import React from "react"

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
