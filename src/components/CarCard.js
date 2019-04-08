import React from "react"
import CarDetails from './CarDetails'

class CarCard extends React.Component {
  // debugger
  render() {
    return (
      <div>
        <h1>{this.props.car.vehicle_make}</h1>
        <h2>{this.props.car.vehicle_model}</h2>
      </div>
    )
  }
}

export default CarCard
