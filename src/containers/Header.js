import React from "react"
import { Grid, Menu, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../App.css'
import icon from '../images/icon.png'
class Header extends React.Component {


  logout = () => {
    this.props.logout()
    localStorage.removeItem('userId')
  }
  render() {
    return (
        <Grid.Row>
          <Grid.Column width={16}>
            <Menu size="massive">
              <Menu.Item name='My Garage' />
              <Menu.Item>
                <img src='https://static.thenounproject.com/png/743172-200.png' />
              </Menu.Item>
						{this.props.currentUser
							?
								<Menu.Menu position="right">
									<Menu.Item onClick={()=>this.props.history.push(`/users/${this.props.currentUser.id}`)} >
									</Menu.Item>
                  <Link className="item" to="/carform">
                    Add New Listing
                    <Icon name='car' />
                  </Link>
									<Link className="item" to="/login" onClick={this.logout} >
										Logout
                    <Icon name='sign out' />
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
