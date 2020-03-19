import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    movie: {},
    title: ''
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSearchMovie = event => {
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?t=${this.state.title}&apikey=trilogy`)
      .then(({ data: movie }) => {
        console.log(movie)
        this.setState({ movie })
      })
  }

  render () {
    return (
      <>
        <form>
          <p>
            <label htmlFor="title">Title</label>
            <input 
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange} />
          </p>
          <button onClick={this.handleSearchMovie}>Search Movie</button>
        </form>
        <div>
          <img src={this.state.movie.Poster} alt={this.state.movie.Title}/>
          <h2>{this.state.movie.Title}</h2>
          <h4>{this.state.movie.Director ? `Directed by ${this.state.movie.Director}` : ''}</h4>
        </div>
      </>
    )
  }
}

export default App
