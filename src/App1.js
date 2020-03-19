import React, { Component } from 'react'

class App extends Component {

  state = {
    numbers: [1, 2, 3, 4, 5],
    number: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddNumber = event => {
    event.preventDefault()
    let numbers = JSON.parse(JSON.stringify(this.state.numbers))
    numbers.push(parseInt(this.state.number))
    this.setState({ numbers, number: '' })
  }
  handleRemoveNumber = i => {
    let numbers = JSON.parse(JSON.stringify(this.state.numbers))
    numbers.splice(i, 1)
    this.setState({ numbers })
  }

  render() {
    return (
      <>
        <form>
          <p>
            <label htmlFor="number">number</label>
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
            />
          </p>
          <button onClick={this.handleAddNumber}>Add Number</button>
        </form>
        <ul>
          {
          this.state.numbers.map((x, i) => (
          <li key={i}>
              {x}
              <button onClick={() => this.handleRemoveNumber(i)}>x</button>
              </li>
          ))
          }
        </ul>
      </>
    )
  }
}

export default App
