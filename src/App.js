import React, { Component } from 'react';
import CarsPage from "./containers/CarsPage";
import Header from "./containers/Header"
import CarDetails from "./components/CarDetails"
import CarForm from "./components/CarForm"


class App extends Component {
  state={
    cars: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/listings')
     .then(res => res.json())
     .then(data =>
      this.setState({
         cars: data
     }))
  }

  addCar = () => {
    fetch('http://localhost:3000/api/v1/listings', {
      method: "POST",
      body: JSON.stringify({
        vehicle_make: " ",
        vehicle_model: " ",
        vehicle_year: " ",
        mileage: " ",
        vehicle_zip_code: " ",
        transmission: " ",
        vehicle_description: " ",
        image_url: " "
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(postNewCar => {
      this.setState({
        cars: [...this.state.cars, postNewCar]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CarForm addCar={this.addCar}/>
        <CarsPage
          cars={this.state.cars}
          />
      </div>
    );
  }
}

export default App;
