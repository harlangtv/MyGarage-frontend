import React, { Component } from 'react';
import CarsPage from "./containers/CarsPage";
import Header from "./containers/Header"
import CarDetails from "./components/CarDetails"
import CarForm from "./components/CarForm"



class App extends Component {
  state={
    cars: []
  }

// take get fetch out of componentDidMount (call function getCars)
// then call function in componentDidMount
// pass fuction down to cars page
// and run function in the edit form
  componentDidMount = () => {
    this.getCars(this.state.cars)
  }

  getCars = () => {
    fetch('http://localhost:3000/api/v1/listings')
     .then(res => res.json())
     .then(data =>
      this.setState({
         cars: data
     }))
  }

  addCar = (formSubmit) => {
    fetch('http://localhost:3000/api/v1/listings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "user_id": 1,
        "vehicle_make": formSubmit.vehicle_make,
        "vehicle_model": formSubmit.vehicle_model,
        "vehicle_year": formSubmit.vehicle_year,
        "mileage": formSubmit.mileage,
        "vehicle_zip_code": formSubmit.vehicle_zip_code,
        "transmission": formSubmit.transmission,
        "vehicle_description": formSubmit.vehicle_description
      })
    })
    .then(res => res.json())
    .then(postNewCar => {
      fetch('http://localhost:3000/api/v1/images', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "listing_id": postNewCar.id,
          "image_url": formSubmit.images
        })
      }).then(res => res.json())
        .then(newCarListing => this.setState({
        cars: [...this.state.cars, newCarListing]
      }))
    })
  }

  reRenderCars = (editedCar) => {
    let oldCar = this.state.cars.find(car => car.id === editedCar.id)
    let oldCarIndex = this.state.cars.indexOf(oldCar)
    let carsArray = this.state.cars
    debugger
    carsArray.splice(oldCarIndex, 1, editedCar)
    this.setState({
      cars: carsArray
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <CarForm
          addCar={this.addCar}
          />
        <CarsPage
          cars={this.state.cars}
          reRenderCars={this.reRenderCars}
          />

      </div>
    );
  }
}

export default App;
