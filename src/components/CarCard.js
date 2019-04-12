import React from "react"
import CarDetails from './CarDetails'
import CarEditor from './CarEditor'

class CarCard extends React.Component {
  state = {
    displayCarDetails: false,
    displayEditForm: false
  }

  handleSelectCar = () => {
    this.setState({
      displayCarDetails: !this.state.displayCarDetails
    })
  }

  handleEditClick = () => {
    console.log("clicking edit")
    this.setState({
      displayEditForm: !this.state.displayEditForm
    })
  }
  render() {
      // debugger
    return (
      <div>
        <h2>{this.props.car.vehicle_make}</h2>
        <h3>{this.props.car.vehicle_model}</h3>
        <button onClick={this.handleSelectCar} >
          Show {this.props.car.vehicle_model} Details
        </button>
        <button onClick={this.handleEditClick} > Update/Edit Listing</button>
        <button> Delete Listing</button>
        {this.state.displayCarDetails ? <CarDetails
          year={this.props.car.vehicle_year}
          transmission={this.props.car.transmission}
          mileage={this.props.car.mileage}
          description={this.props.car.vehicle_description}
          image={this.props.car.images[0].image_url}
          /> : null}
        {this.state.displayEditForm ? <CarEditor
          make={this.props.car.vehicle_make}
          model={this.props.car.vehicle_model}
          year={this.props.car.vehicle_year}
          mileage={this.props.car.mileage}
          zipCode={this.props.car.vehicle_zip_code}
          transmission={this.props.car.transmission}
          description={this.props.car.vehicle_description}
          image={this.props.car.images[0].image_url}
          id={this.props.car.id}
          /> : null}

      </div>
    )
  }
}

export default CarCard
