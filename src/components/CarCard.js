import React from "react"
import CarDetails from './CarDetails'
import CarEditor from './CarEditor'

class CarCard extends React.Component {
  state = {
    displayCarDetails: false,
    displayEditForm: false,
    displayDeleteOption: false
  }

  handleSelectCar = () => {
    this.setState({
      displayCarDetails: !this.state.displayCarDetails
    })
  }

  handleEditClick = () => {
    this.setState({
      displayEditForm: !this.state.displayEditForm
    })
  }

  // handleDeleteOption = () => {
  //   this.setState({
  //     displayDeleteOption: !this.state.displayDeleteOption
  //   })
  // }

  render() {
      // debugger
    return (
      <div>
        <h2>{this.props.car.vehicle_year} {this.props.car.vehicle_make}</h2>
        <h3>{this.props.car.vehicle_model}</h3>
        <button onClick={this.handleSelectCar} >
          Show {this.props.car.vehicle_model} Details
        </button>
        <button onClick={this.handleEditClick} > Update Listing</button>
        <button onClick={() => this.props.handleDelete(this.props.car.id)}> Delete Listing </button>
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
          reRenderCars={this.props.reRenderCars}
          car={this.props.car}
          /> : null}

      </div>
    )
  }
}

export default CarCard
