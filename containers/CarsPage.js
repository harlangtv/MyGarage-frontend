import React from "react";
import CarCollection from './CarCollection'
import CarCard from '../components/CarCard'


class CarsPage extends React.Component {


  render() {
    return (
      <div>
        <CarCollection cars={this.props.cars} />
      </div>
    )
  }
}


export default CarsPage
