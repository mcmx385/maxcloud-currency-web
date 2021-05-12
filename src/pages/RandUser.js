import React, { Component } from 'react'
import Nav from '../components/Nav'

class RandUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('http://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
      //   console.log(users)
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ))
  }
  renderTableRows = () => {
    return this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{`${user.address.street}, ${user.address.city}`}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
        </tr>
      )
    })
  }

  render() {
    const { users, isLoading, isError } = this.state
    if (isLoading) {
      return <div>Loading...</div>
    }
    if (isError) {
      return <div>Error...</div>
    }
    return (
      <div>
        <Nav />
        <div className="container">
          {users.length > 0 ? (
            <table className="table table-sm table-striped table-bordered">
              <thead>
                <tr>{this.renderTableHeader()}</tr>
              </thead>
              <tbody>{this.renderTableRows()}</tbody>
            </table>
          ) : (
            <div>No users</div>
          )}
        </div>
      </div>
    )
  }
}
export default RandUser
