import React from "react";
import CarCard from "../components/CarCard";

class CarCollection extends React.Component {

  displayCars = () => {
    return this.props.cars.map(car => {
      return (<CarCard key={car.id} car={car} />)
    })
  }

  render(){
    return (
     <div >
        {this.displayCars()}
     </div>
   );
 }
}

export default CarCollection;
