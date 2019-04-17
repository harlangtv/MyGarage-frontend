import React from "react"
import { Form, Button, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../App.css'
class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLoginSubmit = () => {

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
				"Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then((response) => {
      if (response.errors) {
        alert(response.errors)
      } else {
        this.props.setCurrentUser(response.user)
				localStorage.setItem('jwt', response.jwt)
        console.log(response);
				this.props.routerProps.history.push(`/cars`)
      }
    })
  }

  render() {
    return (
      <div className="ui-test">
      <div className="ui-login-style" >
        <div className='ui-login-form'>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='white' textAlign='center'>
            Log-in to your My Garage account
          </Header>
          <Segment stacked>
        <Form size='large' onSubmit={this.handleLoginSubmit}>
          <Form.Field>
            <label> Username: </label>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
            <label> Password: </label>
              <Form.Input
                fluid icon='lock'
                iconPosition='left'
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </Form.Field>
            <Button
              color='grey'
              fluid size='large'
              type="submit"
              disabled={!this.validateForm}
              >
              Login
            </Button>

          </Form>
          </Segment>
        </Grid.Column>
        </Grid>
        </div>
        </div>
        </div>
    )
  }
}

export default LoginForm
