import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Switch
} from 'react-router-dom'

import pastries from './database/pastries'

import App from './components/App'
import PastryList from './components/PastryList'
import PastryPage from './components/PastryPage'
import BasketPage from './components/BasketPage'
import NotFound from './components/NotFound'

class Root extends React.Component {
  constructor () {
    super()
    this.state = {
      pastries,
      order: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    // this.removeFromOrder = this.removeFromOrder.bind(this)
    // this.clearOrder = this.clearOrder.bind(this)
    // this.checkOut = this.checkOut.bind(this)
  }

  addToOrder (e) {
    e.preventDefault()
    const input = e.target.querySelector('input')
    const value = input.value

    const pastries = Object.keys(this.state.pastries)
      .map(key => this.state.pastries[key])
    const pastry = pastries.find(p => p.name === value)
    if (!pastry) return

    const order = Object.assign({}, this.state.order)
    const orderPastry = Object.assign({}, order[pastry.name])

    if (orderPastry.name) {  // it exists if it has a name
      orderPastry.quantity++
      order[pastry.name] = orderPastry
    } else {
      order[pastry.name] = Object.assign({}, pastry, {
        quantity: 1
      })
    }

    this.setState({
      order
    })
    console.log('added to order!')
  }

  render () {
    return (
      <Router history={hashHistory}>
        <App>
          <Switch>
            <Route exact path='/' render={props => (
              <PastryList pastries={this.state.pastries} />
            )} />
            <Route exact path='/order' render={props => (
              <BasketPage order={this.state.order} />
            )} />
            <Route path='/:pastry' render={props => {
              const pastryName = props.match.params.pastry
              const pastries = Object.keys(this.state.pastries)
                .map(key => this.state.pastries[key])
              const pastry = pastries.find(p => p.name === pastryName)
              if (pastry) {
                return (
                  <PastryPage pastry={pastry} addToOrder={this.addToOrder} />
                )
              } else {
                return (
                  <Route path='*' status={404} component={NotFound} />
                )
              }
            }} />
          </Switch>
        </App>
      </Router>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
