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

  // handleEdit = (event) => {
  //   fetch(`http://localhost:3000/api/v1/listings/{this.props.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //     body: JSON.stringify({
  //       make: this.state.make,
  //       model: this.state.model,
  //       year: this.state.year,
  //       mileage: this.state.mileage,
  //       zipCode: this.state.zipCode,
  //       transmission: this.state.zipCode,
  //       description: this.state.description
  //     })
  //   }).then(res => res.json()).then(editedCar)
  // }
  render() {
    // console.log(this.props.id)
    return (
    <div className="editForm">
      <h4> Edit your listing</h4>
        <form>
          <label> Vehicle Make
            <input
              type="text"
              name="make"
              value={this.state.make} />
          </label>
        </form>

    </div>
    )
  }
}

export default CarEditor
