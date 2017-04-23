import React from 'react'
import { Link } from 'react-router-dom'

import './PastryList.css'

class PastryList extends React.Component {
  render () {
    return (
      <ul className='pastry-list'>
        {this.props.pastries.map(pastry => {
          return <li key={pastry.name}>
            <Link to={`/${pastry.name}`}>{pastry.name}</Link>
          </li>
        })}
      </ul>
    )
  }
}

export default PastryList
