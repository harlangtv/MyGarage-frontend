import React from "react"
import { Grid, Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends React.Component {


  logout = () => {
    this.props.logout()
    localStorage.removeItem('userId')
  }
  render() {
    return (
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu>
						{this.props.currentUser
							?
								<Menu.Menu position="right">
									<Menu.Item onClick={()=>this.props.history.push(`/users/${this.props.currentUser.id}`)} >

									</Menu.Item>
                  <Link className="item" to="/carform">
                    Add New Listing
                  </Link>
									<Link className="item" to="/login" onClick={this.logout} >
										Logout
									</Link>
								</Menu.Menu>
							:
								<Menu.Menu position="right">
									<Link className="item" to="/login">
										Login
									</Link>
									<Link className="item" to="/signup">
										Sign Up
									</Link>
								</Menu.Menu>
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>

      )
  }


}

export default Header
