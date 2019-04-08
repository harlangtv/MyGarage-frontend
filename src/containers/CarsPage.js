import React from "react";
import CarCard from '../components/CarCard'
import CarDetails from '../components/CarDetails'


class CarsPage extends React.Component {

  renderCars = () => {
    return this.props.cars.map(car => {
      return <CarCard key={car.id} car={car} />
    })
  }

  render() {

    return (
      <div>
        {/*this.state.selectedCar ? <></>: */}
        {this.renderCars()}
      </div>
    )
  }
}


export default CarsPage
