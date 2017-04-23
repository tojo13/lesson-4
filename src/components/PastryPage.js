import React from 'react'
import './PastryPage.css'

function formatPrice (priceInCents) {
  return `$${(priceInCents / 100).toFixed(2)}`
}

class PastryPage extends React.Component {
  render () {
    const { pastry } = this.props
    return (
      <div className='pastry-page'>
        <div className='pastry-container'>
          <div className='pastry-img-container'>
            <img src={pastry.image} alt={pastry.name} />
          </div>
          <div className='pastry-info'>
            <h5 className='name'>{pastry.name}</h5>
            <p className='description'>{pastry.description}</p>
            <div className='price'>{formatPrice(pastry.price)}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PastryPage
