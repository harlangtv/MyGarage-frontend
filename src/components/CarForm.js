import React from "react";
import { Form, Button } from 'semantic-ui-react'
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
    this.props.routerProps.history.push(`/cars`)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <label> Vehicle Make: </label>
            <input
              type="text"
              name="vehicle_make"
              value={this.state.vehicle_make}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <label> Vehicle Model: </label>
            <input
              type="text"
              name="vehicle_model"
              value={this.state.vehicle_model}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <label> Vehicle Year: </label>
            <input
              type="number"
              name="vehicle_year"
              value={this.state.vehicle_year}
              onChange={this.handleChange}
              maxLength="4"/>
          </Form.Field>
          <Form.Field>
          <label> Mileage: </label>
            <input
              type="number"
              name="mileage"
              value={this.state.mileage}
              onChange={this.handleChange}
              maxLength="6" />
          </Form.Field>
          <Form.Field>
          <label> Vehicle Zip Code: </label>
            <input
              type="number"
              name="vehicle_zip_code"
              value={this.state.vehicle_zip_code}
              onChange={this.handleChange}
              maxLength="5"/>
          </Form.Field>
          <Form.Field>
          <label> Transmission: </label>
            <input
              type="text"
              name="transmission"
              value={this.state.transmission}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <label> Description: </label>
            <textarea
              rows="4" cols="50"
              name="vehicle_description"
              value={this.state.vehicle_description}
              onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
          <label> Vehicle Image (URL): </label>
            <input
              type="text"
              name="images"
              value={this.state.images}
              onChange={this.handleChange} />
          </Form.Field>
          <Button onClick={this.handleSubmit}> Create New Listing </Button>
        </Form>

    )
  }
}

export default CarForm

// this.state.vehicle_make, this.state.vehicle_model, this.state.vehicle_year, this.state.mileage, this.state.vehicle_zip_code, this.state.transmission, this.state.vehicle_description, this.state.image_url
