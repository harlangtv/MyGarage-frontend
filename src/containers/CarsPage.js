import React from "react";
import CarCard from '../components/CarCard'


class CarsPage extends React.Component {
  state = {
    selectedCar: null
  }

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
