import React from "react";
import CarCard from '../components/CarCard'


class CarsPage extends React.Component {

  renderCar = (carID) => {
    let currentCar = this.props.cars.filter(car => {
      if(car.id === carID){
        return car
      }
    })
  }

  renderCarImage = (carImageID) => {
    let currentCarImage = this.props.carImages.filter(carImage => {
      if(carImage.listing_id === carImageID)
      return carImageID
    })
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <CarCard
          renderCar={this.renderCar()}
          renderCarImage={this.renderCarImage()}
          />
      </div>
    )
  }
}


export default CarsPage
