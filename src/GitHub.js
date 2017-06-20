import React, { Component } from 'react'
import './GitHub.css'

class GitHub extends Component {
    state = {
        username: ''
    }

    handleChange = (ev) => {
        ev.preventDefault()

        const username = ev.currentTarget.value
        this.setState({ username })
    }

    render() {
        return (
            <div className="github">
                <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo" className="github-logo" />
                <form>
                    <div>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look Up GitHub User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GitHub