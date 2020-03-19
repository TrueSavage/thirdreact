import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    watchlist: [],
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
        this.setState({ movie, title: '' })
      })
  }

  handleAddToWatchlist = () => {
    let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
    watchlist.push(this.state.movie)
    this.setState({ watchlist, movie: {} })
  }

  handleDeleteMovie = i => {
    let watchlist = JSON.parse(JSON.stringify(this.state.watchlist))
    watchlist.splice(i, 1)
    this.setState({ watchlist })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <div class="jumbotron">
            <h1 class="display-4">Watchlist App</h1>
            <p class="lead">Search for your favorite movies and add them to a watchlist</p>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Search For A Movie</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSearchMovie}>Search Movie</button>
            </form>
            {this.state.movie.Title ?
              (<div className="card">
                <img src={this.state.movie.Poster} className="card-img-top" alt={this.state.movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{this.state.movie.Title}</h5>
                  <p className="card-text">Directed by {this.state.movie.Director}</p>
                  <button className="btn btn-success" onClick={this.handleAddToWatchlist}>Add To Watchlist</button>
                </div>
              </div>) : null}
          </div>
          <div className="col-md-6">
            <h4>Your Watchlist</h4>
            <ul className="list-group">
              {
                this.state.watchlist.map((movie, i) => (
                  <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    {movie.Title}
                    <button onClick={() => this.handleDeleteMovie(i)} className="btn btn-danger">x</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
