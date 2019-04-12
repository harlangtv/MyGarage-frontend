import React from "react";
import CarsPage from '../containers/CarsPage'

class CarForm extends React.Component {

  state = {
    vehicle_make: " ",
    vehicle_model: " ",
    vehicle_year: " ",
    mileage: " ",
    vehicle_zip_code: " ",
    transmission: " ",
    vehicle_description: " ",
    images: " "
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCar(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Submit a new Car! </h2>
        <form onSubmit={this.handleSubmit}>
          <label> Vehicle Make:
            <input
              type="text"
              name="vehicle_make"
              value={this.state.vehicle_make}
              onChange={this.handleChange} />
          </label>
          <label> Vehicle Model:
            <input
              type="text"
              name="vehicle_model"
              value={this.state.vehicle_model}
              onChange={this.handleChange} />
          </label>
          <label> Vehicle Year:
            <input
              type="number"
              name="vehicle_year"
              value={this.state.vehicle_year}
              onChange={this.handleChange}
              maxLength="4"/>
          </label>
          <label> Mileage:
            <input
              type="number"
              name="mileage"
              value={this.state.mileage}
              onChange={this.handleChange}
              maxLength="6" />
          </label>
          <label> Vehicle Zip Code:
            <input
              type="number"
              name="vehicle_zip_code"
              value={this.state.vehicle_zip_code}
              onChange={this.handleChange}
              maxLength="5"/>
          </label>
          <label> Transmission:
            <input
              type="text"
              name="transmission"
              value={this.state.transmission}
              onChange={this.handleChange} />
          </label>
          <label> Description:
            <textarea
              rows="4" cols="50"
              name="vehicle_description"
              value={this.state.vehicle_description}
              onChange={this.handleChange} />
          </label>
          <label> Vehicle Image (URL):
            <input
              type="text"
              name="images"
              value={this.state.images}
              onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit}> Create New Listing </button>
        </form>
      </div>
    )
  }
}

export default CarForm

// this.state.vehicle_make, this.state.vehicle_model, this.state.vehicle_year, this.state.mileage, this.state.vehicle_zip_code, this.state.transmission, this.state.vehicle_description, this.state.image_url
