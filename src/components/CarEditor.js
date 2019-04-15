import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class CarEditor extends Component {
  state = {
    make: this.props.make,
    model: this.props.model,
    year: this.props.year,
    mileage: this.props.mileage,
    zipCode: this.props.zipCode,
    transmission: this.props.transmission,
    description: this.props.description,
  }

  handleEditChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEditSubmit = (event) => {
    event.preventDefault()
    console.log("in fetch", this.state);
    fetch(`http://localhost:3000/api/v1/listings/${this.props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        vehicle_make: this.state.make,
        vehicle_model: this.state.model,
        vehicle_year: this.state.year,
        mileage: this.state.mileage,
        vehicle_zip_code: this.state.zipCode,
        transmission: this.state.zipCode,
        vehicle_description: this.state.description
      })
    }).then(res => res.json())
      .then(editedCar => {
        console.log("in handleedit .then", editedCar);
        this.props.reRenderCars(editedCar)}
      )
  }



  render() {
    console.log("in render", this.props)
    return (
        <Form onSubmit={this.handleEditSubmit}>
          <Form.Field>
            <label> Vehicle Make:</label>
              <input
                type="text"
                name="make"
                value={this.state.make}
                onChange={this.handleEditChange}/>
          </Form.Field>
          <Form.Field>
          <label> Vehicle Model:</label>
            <input
              type="text"
              name="model"
              value={this.state.model}
              onChange={this.handleEditChange}/>
          </Form.Field>
          <Form.Field>
          <label> Vehicle Year: </label>
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleEditChange}/>
          </Form.Field>
          <Form.Field>
          <label> Mileage: </label>
            <input
              type="number"
              name="mileage"
              value={this.state.mileage}
              onChange={this.handleEditChange}/>
          </Form.Field>
          <Form.Field>
          <label> Vehicle Zip Code: </label>
            <input
              type="number"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleEditChange}/>
          </Form.Field>
          <Form.Field>
          <label> Description:</label>
            <textarea
              rows="4" cols="50"
              name="description"
              value={this.state.description}
              onChange={this.handleEditChange}/>
          </Form.Field>
          <Button onClick={this.handleEditSubmit}> Submit Listing </Button>

        </Form>
    )
  }
}

export default CarEditor
