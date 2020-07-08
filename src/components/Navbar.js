import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <nav className="navbar">

        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-button"
            onClick={this.handleToggle}
          >
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
