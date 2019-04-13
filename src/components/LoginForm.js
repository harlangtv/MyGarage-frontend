import React from "react"

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

  handleLoginSubmit = event => {
    fetch("http://localhost:3001/api/v1/login", {
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
				this.props.history.push(`/users/${response.user.id}`)
      }
    })
  }

  render() {
    return (
      <div className="Login">
        Login Form
        <form onSubmit={this.handleLoginSubmit}>
            <label> Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange} />
            </label>
            <label> Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange} />
            </label>
            <button
              type="submit"
              disabled={!this.validateForm}
              >
              Login
            </button>
          </form>
      </div>
    )
  }
}

export default LoginForm
