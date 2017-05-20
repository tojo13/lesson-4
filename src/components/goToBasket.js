import React from 'react'
import { Link } from 'react-router-dom'

import './goToBasket.css'

class GoToBasket extends React.Component {
  render () {
    return <Link to={'/order'} className='basketLink'>Go to Basket</Link>
  }
}

export default GoToBasket
