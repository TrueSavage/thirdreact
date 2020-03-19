import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  state = {
    pokemon: []
  }


  componentDidMount () {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(({ data: { results } }) => {
        console.log(results)
        this.setState({ pokemon: results })
      })
      .catch(e => console.error(e))
  }

  handleGetPokemon = url => {
    axios.get(url)
      .then(({ data }) => {
        console.log(data)
      })
  }

  render () {
    return (
      <>
      <h1>Hello World!</h1>
      {
        this.state.pokemon.map(pokemon => (
          <div>
            <p>{pokemon.name}</p>
            <button onClick={() => this.handleGetPokemon(pokemon.url)}>More Info</button>
          </div>
        ))
      }
      {/* <div>
        <p>{this.state.character.name}</p>
        <p>{this.state.character.height}</p>
        <p>{this.state.character.hair_color}</p>
      </div> */}
      </>
    )
  }
}

export default App
