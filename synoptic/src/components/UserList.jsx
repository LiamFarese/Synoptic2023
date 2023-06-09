import React, { Component } from 'react'
import axios from 'axios'

export class UserList extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 users: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:8080/profile/1')
			.then(response => {
				console.log(response)
				this.setState({users: response.data})
			})
			.catch(error => {
				console.log(error)
			})
	}
	

	render() {
		return (
			<div>
				UserList
			</div>
		)
	}
}

export default UserList