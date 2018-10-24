import React from "react"
import logo from "./logo.svg"

class Header extends React.Component {
  state = {
    name: "abdou"
  }
  render() {
    // console.log(this)
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          name {this.props.nom} email {this.props.email} city {this.props.city}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}
export default Header
