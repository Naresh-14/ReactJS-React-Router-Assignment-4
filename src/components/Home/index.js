import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getTeamCardsData()
  }

  getTeamCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state

    return (
      <div className="ipl-home-container">
        <div className="ipl-content">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-items-container">
          {teamsData.map(eachItem => (
            <TeamCard teamsData={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
