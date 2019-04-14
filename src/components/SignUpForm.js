import React from 'react'
import { Form, Button } from 'semantic-ui-react'
class SignUpForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createUser = () => {
    fetch("http://localhost:3000/api/v1/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.history.push(`/cars/`)
			}
		})
  }

  handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}


  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
      		    <Form.Field>
      		      <label>Username</label>
      		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
      		    </Form.Field>
      		    <Form.Field>
      		      <label>First Name</label>
      		      <input onChange={this.handleChange} name="first_name" value={this.state.first_name} placeholder='First Name' />
      		    </Form.Field>
              <Form.Field>
      		      <label>Last Name</label>
      		      <input onChange={this.handleChange} name="last_name" value={this.state.last_name} placeholder='Last Name' />
      		    </Form.Field>
      		    <Form.Field>
      		      <label>Password</label>
      		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
      		    </Form.Field>
      		    <Form.Field>
      		      <label>Password Confirmation</label>
      		      <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder='Password Confirmation' />
      		    </Form.Field>
      		    <Button type='submit'>Submit</Button>
      		  </Form>

    )
  }
}

export default SignUpForm
