import React from 'react'
import { Link } from 'react-router-dom'

import './goToList.css'

class GoToList extends React.Component {
  render () {
    return <Link to={'/'} className='listLink'>Go to Pastry List</Link>
  }
}

export default GoToList
