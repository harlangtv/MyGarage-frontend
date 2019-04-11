import React from "react";
import CarCard from '../components/CarCard'
import CarForm from '../components/CarForm'
class CarsPage extends React.Component {


  renderCars = () => {
    return this.props.cars.map(car => {
      return <CarCard key={car.id} car={car} />
    })
  }

  render() {

    return (
      <div>
        {this.renderCars()}
      </div>
    )
  }
}



export default CarsPage
