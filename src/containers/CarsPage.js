import React from "react";
import CarCard from '../components/CarCard'
class CarsPage extends React.Component {


  renderCars = () => {
    return this.props.cars.map(car => {
      return <CarCard key={car.id} car={car} reRenderCars={this.props.reRenderCars}
      handleDelete={this.props.handleDelete}  
        />
    })
  }

  render() {
    // console.log(this.props.getCars);
    return (
      <div>
        {this.renderCars()}
      </div>
    )
  }
}



export default CarsPage
