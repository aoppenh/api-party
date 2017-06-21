import React, { Component } from 'react'
import './Monster.css'

// http://pokeapi.co/api/v2/pokemon-species/
// https://pokeapi.co/docsv2/#pokemon-section
// These url's contains the data for all pokemon

class Monster extends Component {
    state = {
        mon: {
            name: '',
            species: '',
            hp: '',
            attack: '',
            defense: '',
            sp_atk: '',
            sp_def: '',
            speed: '',
            total: '',
            // habitat: '',
            national_id: '',
            // generation: '',
        },
        sprites: {
            created: '',
            id: 1,
            image: '',
            modified: '',
            name: '',
            pokemon: {
                name: '',
                resource_uri: ''
            },
            resource_uri: ''
        },
    }

    constructor(props) {
        super(props)
        this.fetchmonData(props)
        // this.fetchspriteData(props)
    }

    fetchmonData(props) {
        fetch(`http://pokeapi.co/api/v1/pokemon/${props.match.params.username}`)
            .then(response => response.json())
            .then(mon => this.setState({ mon }))
    }

    fetchspriteData(props) {
        fetch(`http://pokeapi.co/api/v1/sprite/${this.state.mon.natioanl_id}`)
            .then(response => response.json())
            .then(sprites => this.setState({ sprites }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = (nextProps.location !== this.props.location)
        if (locationChanged) {
            this.fetchmonData(nextProps)
        }
    }

    joinTypes = () => {

    }

    render() {
        const { mon } = this.state
        // const habitat = (mon.habitat === null) ? 'none' : mon.habitat.name
        const total = (mon.total === 0) ? (mon.hp + mon.attack + mon.defense + mon.sp_atk + mon.sp_def + mon.speed) : mon.total
        const species = (mon.species === '') ? 'unavailable' : mon.species
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.national_id}.png`
        return (
            <div className="monster">
                <div className="images">
                    <img src={img} alt="mon" />
                </div>
                <div>
                    <h2>{mon.name}</h2>
                    <h3>species: {species}</h3>
                    <h3>national pokedex #: {mon.national_id}</h3>
                    <h2>stats</h2>
                    <h3>hp: {mon.hp}</h3>
                    <h3>attack: {mon.attack}</h3>
                    <h3>defense: {mon.defense}</h3>
                    <h3>special attack: {mon.sp_atk}</h3>
                    <h3>special defense: {mon.sp_def}</h3>
                    <h3>speed: {mon.speed}</h3>
                    <h3>stat total: {total}</h3>
                    {/*<h3>habitat: {habitat}</h3>*/}
                    {/*<h3>{mon.generation.name}</h3>*/}
                    <p><a href={`https://bulbapedia.bulbagarden.net/wiki/${mon.name}_(Pokemon)`} target="_">Link to {mon.name}'s Bulbapedia Page</a></p>
                    <p><a href={`https://pokemondb.net/pokedex/${mon.name}`} target="_">Link to {mon.name}'s PokemonDB Page</a></p>
                    <p><a href={`http://pokeapi.co/api/v1/pokemon/${mon.national_id}`} target="_">pokeapi v1</a></p>
                </div>
            </div>
        )
    }
}
export default Monster