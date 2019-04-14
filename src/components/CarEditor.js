import React, { Component } from 'react';

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
        console.log("in .then", editedCar);
        this.props.reRenderCars(editedCar)}
      )
  }

  

  render() {
    console.log("in render", this.props)
    return (
    <div className="editForm">
      <h4> Edit your listing</h4>
        <form onSubmit={this.handleEditSubmit}>
          <label> Vehicle Make:
            <input
              type="text"
              name="make"
              value={this.state.make}
              onChange={this.handleEditChange}/>
          </label>
          <label> Vehicle Model:
            <input
              type="text"
              name="model"
              value={this.state.model}
              onChange={this.handleEditChange}/>
          </label>
          <label> Vehicle Year:
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleEditChange}/>
          </label>
          <label> Mileage:
            <input
              type="number"
              name="mileage"
              value={this.state.mileage}
              onChange={this.handleEditChange}/>
          </label>
          <label> Vehicle Zip Code:
            <input
              type="number"
              name="zipCode"
              value={this.state.zipCode}
              onChange={this.handleEditChange}/>
          </label>
          <label> Description:
            <textarea
              rows="4" cols="50"
              name="description"
              value={this.state.description}
              onChange={this.handleEditChange}/>
          </label>
          <button onClick={this.handleEditSubmit}> Submit updated Car</button>
          <button onClick={() => this.props.handleDelete(this.props.id)}> Delete Listing </button>
        </form>

    </div>
    )
  }
}

export default CarEditor
