import React, { Component } from "react"
import axios from "axios"
import Header from "./Header"
import "./App.css"
// import user from "./user.json"

class App extends Component {
  state = {
    // userData: user,
    nom: "",
    email: "",
    tabData: []
  }

  handleChange = event => {
    event.preventDefault()
    // console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value })
  }
  getQuiz = async () => {
    const myData = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=22&type=multiple"
    )
    console.log("data axios", myData.data.results)
    this.setState({ tabData: myData.data.results })
  }
  componentDidMount() {
    this.getQuiz()
  }

  render() {
    const { nom, email, tabData } = this.state
    // console.log(poulet)
    return (
      <div className="App">
        <Header {...this.state} />
        <h3>{nom} </h3>
        <h3>{email}</h3>
        <div>{JSON.stringify(tabData)}</div>
        <form>
          <label>
            Name:
            <input type="text" name="nom" onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
