import React, { Component } from 'react'
import './Monster.css'

// http://pokeapi.co/api/v2/pokemon-species/
//This url contains the data for all pokemon

class Monster extends Component {
  state = {
    mon: {
      order: '',
      habitat: '',
      generation: '',
    }
  }
  
  constructor(props) {
    super(props)
    this.fetchmonData(props)
  }

  fetchmonData(props) {
    fetch(`http://pokeapi.co/api/v2/pokemon-species/${props.match.params.username}`)
      .then(response => response.json())
      .then(mon => this.setState({ mon }))
    console.log(props.match.params.username)
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = (nextProps.location !== this.props.location)
    if (locationChanged) {
      this.fetchmonData(nextProps)
    }
  }

  render() {
    const { mon } = this.state
    const habitat = (mon.habitat === null) ? 'none' : mon.habitat.name
    return (
      <div className="monster">
        <img src={`node_modules\pokemon-sprites\sprites\pokemon${this.props.match.params.username}`} alt="mon"/>
        <h2>{this.props.match.params.username}</h2>
        <h3>pokedex number: {mon.order}</h3>
        <h3>habitat: {habitat}</h3>
        <h3>{mon.generation.name}</h3>
        <a href={`https://bulbapedia.bulbagarden.net/wiki/${this.props.match.params.username}_(Pokemon)`} target="_">Link to {mon.name}'s Bulbapedia Page</a>
      </div>
    )
  }
}
export default Monster