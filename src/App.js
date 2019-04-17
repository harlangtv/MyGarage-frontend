import React, { Component, Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CarsPage from "./containers/CarsPage";
import Header from "./containers/Header"
import CarDetails from "./components/CarDetails"
import CarForm from "./components/CarForm"
import CarEditor from "./components/CarEditor"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"




class App extends Component {
  constructor(){
    super()
    this.state={
      cars: [],
      currentUser: null
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteCar = this.deleteCar.bind(this)
  }


  componentDidMount = () => {
    this.getCars()
    this.updateLocalStorage()
  }

  updateLocalStorage = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      fetch("http://localhost:3000/api/v1/auto_login", {
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
    localStorage.removeItem('jwt')
    this.setState({
      currentUser: null
    }, () => {this.props.history.push("/login") })
    console.log("logged out")
  }

  getCars = () => {
    fetch('http://localhost:3000/api/v1/listings', {
      headers: {
        "Authorization": localStorage.getItem('jwt')
      }
    })
     .then(res => res.json())
     .then(data =>
         this.setState({
          cars: data })

      )
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
        .then(newCarListing =>
          this.setState({
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

  handleDelete = (id) => {
    fetch(`http://localhost:3000/api/v1/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log("in handleDelete .then", id)
      this.deleteCar(id)
    })
  }

  deleteCar = (id) => {
    let newCars = this.state.cars.filter(car => car.id !== id)
    this.setState({
      cars: newCars
    })
  }

  renderLoggedIn = () => {
    if (localStorage.getItem('jwt')){
      return (
        <Grid>
          <Header
            history={this.props.history} currentUser={this.state.currentUser}
            logout={this.logout}
            />
          <Grid.Row centered>
            <Switch>
              <Route
                path="/carform"
                render={(props) => <CarForm routerProps={props} addCar={this.addCar} />} />
              <Route
                path="/login"
                render={(props) => <LoginForm routerProps={props} setCurrentUser={this.setCurrentUser}/>} />
              <Route
                path="/cars" render={(props) => <CarsPage
                routerProps={props} cars={this.state.cars} reRenderCars={this.reRenderCars} handleDelete={this.handleDelete}/>} />
              <Route path="/signup" component={SignUpForm} />
              <Route
                path="/"
                render={(props) => <LoginForm routerProps={props} setCurrentUser={this.setCurrentUser}/>} />
            </Switch>
          </Grid.Row>
        </Grid>
      )
    }
    else {
      return (
        <Grid>
          <Grid.Row centered>
            <Switch>
              <Route
              path="/login"
              render={(props) => <LoginForm routerProps={props} setCurrentUser={this.setCurrentUser}/>} />
              <Route path="/signup" component={SignUpForm} />
              <Route
                path="/"
                render={(props) => <LoginForm routerProps={props} setCurrentUser={this.setCurrentUser}/>} />
            </Switch>
          </Grid.Row>
        </Grid>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderLoggedIn()}
      </div>
    )
  }
}
export default App
