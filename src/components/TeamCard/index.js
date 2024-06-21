import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {id, name, teamImageUrl} = teamsData

  return (
    <li className="team-cards-container">
      <Link to={`/team-matches/${id}`} className="teams-container">
        <img src={teamImageUrl} alt={name} className="team-cards-img" />
        <p className="team-cards-names">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
