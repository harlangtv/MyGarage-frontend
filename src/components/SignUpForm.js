import React from 'react'

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
    fetch("http://localhost:3001/api/v1/users", {
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
				this.props.history.push(`/users/${response.user.id}`)
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
      <div>
        sign up form
      </div>
    )
  }
}

export default SignUpForm
