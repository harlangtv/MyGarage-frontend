import React, { Component } from 'react';
import CarsPage from "./containers/CarsPage";


class App extends Component {
  state={
    cars: [],
    carImages: []
  }


  componentDidMount = () => {
    Promise.all([
           fetch('http://localhost:3000/api/v1/listings'),
           fetch('http://localhost:3000/api/v1/images')
       ])
       .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
       .then(([data1, data2]) => this.setState({
           cars: data1,
           carImages: data2
       }))
  }

  render() {
    console.log(this.state.cars)
    console.log(this.state.carImages)
    return (
      <div className="App">
        <CarsPage
          cars={this.state.cars}
          carImages={this.state.carImages}/>
      </div>
    );
  }
}

export default App;
