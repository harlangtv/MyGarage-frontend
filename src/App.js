import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import CarsPage from "./containers/CarsPage";
import Header from "./containers/Header"
import CarDetails from "./components/CarDetails"
import CarForm from "./components/CarForm"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"


class App extends Component {
  state={
    cars: [],
    users: [],
    currentUser: null
  }

  componentDidMount = () => {
    this.getCars()
    this.getUsers()
    this.updateLocalStorage()
  }

  updateLocalStorage = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      fetch("http://localhost:3001/api/v1/auto_login", {
        headers: {
          "Authorization": jwt
        }
      })
      .then(res => res.json())
      .then((response) => {
        if(response.errors) {
          alert(response.errors)
        } else {
          this.setState({currentUser: response})
        }
      })
    }
  }

  setCurrentUser = (response) => {
    this.setState({
      currentUser: response
    })
  }

  updateUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {this.prpos.history.push("/login") })
  }
  getCars = () => {
    fetch('http://localhost:3000/api/v1/listings')
     .then(res => res.json())
     .then(data =>
      this.setState({
         cars: data
     }))
  }

  getUsers = () => {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(users =>
      this.setState({
        users: users
      })
    )
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
    carsArray.splice(oldCarIndex, 1, editedCar)
    this.setState({
      cars: carsArray
    })
  }


  render() {
    console.log(this.state.currentUser);
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/carform" render={routerProps => <CarForm addCar={this.addCar} {...routerProps} />} />
            <Route path="/login" render={routerProps => <LoginForm {...routerProps} setCurrentUser={this.setCurrentUser}/>} />
  
            <Route path="/cars" render={routerProps => <CarsPage {...routerProps} cars={this.state.cars} reRenderCars={this.reRenderCars}/>} />
              </Switch>

          <Header />
          <LoginForm />
          <SignUpForm />
          <CarForm
            addCar={this.addCar}
            />
          <CarsPage
            cars={this.state.cars}
            reRenderCars={this.reRenderCars}
            />

        </div>
      </Router>
    );
  }
}

export default App;
