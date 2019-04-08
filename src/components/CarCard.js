import React from "react"
import CarDetails from './CarDetails'

class CarCard extends React.Component {
  state = {
    displayCarDetails: false
  }

  handleSelectCar = () => {
    this.setState({
      displayCarDetails: !this.state.displayCarDetails
    })
  }

  // debugger
  render() {
    return (
      <div>
        <h1>{this.props.car.vehicle_make}</h1>
        <h3>{this.props.car.vehicle_model}</h3>
        <button onClick={this.handleSelectCar} >
          Show {this.props.car.vehicle_model} Details
        </button>
        {this.state.displayCarDetails ? <CarDetails /> : null}
      </div>
    )
  }
}

export default CarCard






// toggleDetails = () => {
//   this.setState(prevState => ({
//     selectedCar: !prevState.selectedCar
//   }))
// }
