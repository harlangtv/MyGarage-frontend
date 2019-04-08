import React from "react"

const CarDetails = (props) => {

  return (
      <div>
        <p> Year: {props.year} </p>
        <p> Transmission: {props.transmission} </p>
        <p> {props.description} </p>
      </div>
    )

}

export default CarDetails
