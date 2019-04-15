import React from "react"
import { Button, Card, Image, Modal, Header } from 'semantic-ui-react'
import CarDetails from './CarDetails'
import CarEditor from './CarEditor'

class CarCard extends React.Component {
  state = {
    displayCarDetails: false,
    displayEditForm: false
  }

  handleSelectCar = () => {
    this.setState({
      displayCarDetails: !this.state.displayCarDetails
    })
  }

  handleEditClick = () => {
    console.log("Being clicked");
    this.setState({
      displayEditForm: !this.state.displayEditForm
    })
  }

  // handleDeleteOption = () => {
  //   this.setState({
  //     displayDeleteOption: !this.state.displayDeleteOption
  //   })
  // }

  render() {
      // debugger
    return (
      <Card.Group>
        <Card>
          <Card.Content>
            <Image floated='right' size='large' src={this.props.car.images[0].image_url} />
            <Card.Header>{this.props.car.vehicle_year} {this.props.car.vehicle_make}</Card.Header>
            <Card.Meta>{this.props.car.vehicle_model}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              <Modal trigger={<Button basic color='green'>
                Show {this.props.car.vehicle_model} Details
              </Button>} closeIcon>
                <Modal.Header>Vehicle Details</Modal.Header>
                <Modal.Content >
                  <Image wrapped size='medium' src={this.props.car.images[0].image_url} />
                  <Modal.Description>
                    <Header>{this.props.car.vehicle_year} {this.props.car.vehicle_make}</Header>
                    <p> Transmission: {this.props.car.transmission} </p>
                    <p> Mileage: {this.props.car.mileage} </p>
                    <p> {this.props.car.vehicle_description} </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>

              <Button onClick={this.handleEditClick} basic color='blue'>
                Edit {this.props.car.vehicle_model} Listing
              </Button>
              <Button onClick={() => this.props.handleDelete(this.props.car.id)} basic color='red'>
                Delete Listing
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

    )
  }
}

export default CarCard


// <div>
//   <h2>{this.props.car.vehicle_year} {this.props.car.vehicle_make}</h2>
//   <h3>{this.props.car.vehicle_model}</h3>
//   <button onClick={this.handleSelectCar} >
//     Show {this.props.car.vehicle_model} Details
//   </button>
//   <button onClick={this.handleEditClick} > Update Listing</button>
//   <button onClick={() => this.props.handleDelete(this.props.car.id)}> Delete Listing </button>
//   {this.state.displayCarDetails ? <CarDetails

//     year={this.props.car.vehicle_year}
//     transmission={this.props.car.transmission}
//     mileage={this.props.car.mileage}
//     description={this.props.car.vehicle_description}
//     image={this.props.car.images[0].image_url}
//     /> : null}
//   {this.state.displayEditForm ? <CarEditor
//     make={this.props.car.vehicle_make}
//     model={this.props.car.vehicle_model}
//     year={this.props.car.vehicle_year}
//     mileage={this.props.car.mileage}
//     zipCode={this.props.car.vehicle_zip_code}
//     transmission={this.props.car.transmission}
//     description={this.props.car.vehicle_description}
//     image={this.props.car.images[0].image_url}
//     id={this.props.car.id}
//     reRenderCars={this.props.reRenderCars}
//     car={this.props.car}
//     /> : null}
// </div>
