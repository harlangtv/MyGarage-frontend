import React from "react"
import CarCard from '../components/CarCard'

const CarsPage = ({ cars, reRenderCars, handleDelete }) => {

  const renderCars = () => {
    let allCars = cars.map(car => {
      return <CarCard
        key={car.id}
        car={car}
        reRenderCars={reRenderCars}
        handleDelete={handleDelete}
        />
    })
    return allCars
  }

    // console.log(this.props.getCars);
    return (
      <div>
        {renderCars()}
      </div>

    )
}



export default CarsPage
