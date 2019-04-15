import React from "react"
import { Form, Button } from 'semantic-ui-react'
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
        <Form onSubmit={this.handleLoginSubmit}>
          <Form.Field>
            <label> Username: </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
            <label> Password: </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </Form.Field>
            <Button
              type="submit"
              disabled={!this.validateForm}
              >
              Login
            </Button>
          </Form>
    )
  }
}

export default LoginForm
