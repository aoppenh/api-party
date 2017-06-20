import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Monster from './Monster.js'
import './Pokemon.css'

class Pokemon extends Component {
  state = {
    mon: ''
  }

  handleChange = (ev) => {
    const mon = ev.currentTarget.value
    this.setState({ mon })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.mon}`)
  }

  render() {
    return (
      <div className="pokemon">
        <img src="http://i.imgur.com/58JIZPC.png" alt="pokeball" className="poke-logo"/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>| WARNING: Any entree from generation 8 will not function |</p>
          <div>
            <input 
              type="text"
              value={this.state.mon}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>
        <Route exact path='/pokemon' render={() => <h3>Please enter the name of a Pokemon</h3>} />
        <Route path='/pokemon/:username' component={Monster} />
      </div>
    )
  }
}

export default Pokemon