import React from 'react'
import PropTypes from 'prop-types'

import GoToList from './goToList'

import './BasketPage.css'

function formatPrice (priceInCents) {
  return `$${(priceInCents / 100).toFixed(2)}`
}

class BasketPage extends React.Component {
  render () {
    const { order } = this.props
    const totalPrice = Object.keys(order)
      .map(key => order[key])
      .reduce((acc, pastry) => {
        return acc + (pastry.quantity * pastry.price)
      }, 0)

    return (
      <div className='basket-page'>
        <GoToList />
        <table className='basket-list'>
          <tbody>
            <tr>
              <td className='list-header'>Name</td>
              <td className='list-header'>Price</td>
              <td className='list-header'>Quantity</td>
            </tr>
            {Object.keys(order).map(key => {
              const item = order[key]
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{formatPrice(item.price)}</td>
                  <td>{item.quantity}</td>
                </tr>
              )
            })}
            <tr>
              <td colSpan='3' className='subtotal'>
                Subtotal: {formatPrice(totalPrice)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

BasketPage.propTypes = {
  order: PropTypes.object.isRequired
}

export default BasketPage
