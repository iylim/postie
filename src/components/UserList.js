import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/UserList.css'

// stateless functional components
const UserList = ({ users }) => (
  <div className="user-list">
    <ul className="list">
      {users.map(user => (
        <li key={user.id}>
          <p className="list-item-title">{user.username}</p>
          <Link to={{pathname: `/users/${user.id}`, state: { user } }} className="details" >Details</Link>
        </li>
      ))}
    </ul>
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string
  })).isRequired, 
}

export default UserList
