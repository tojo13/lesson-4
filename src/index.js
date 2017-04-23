import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom'

import pastries from './database/pastries'

import App from './components/App'
import PastryList from './components/PastryList'
import PastryPage from './components/PastryPage'
import NotFound from './components/NotFound'

class Root extends React.Component {
  constructor () {
    super()
    this.state = {
      pastries
    }
  }

  render () {
    return (
      <Router history={hashHistory}>
        <App>
          <Route exact path='/' render={props => (
            <PastryList pastries={this.state.pastries} />
          )} />
          <Route path='/:pastry' render={props => {
            const pastryName = props.match.params.pastry
            const pastry = this.state.pastries.find(p => p.name === pastryName)
            if (pastry) {
              return (
                <PastryPage pastry={pastry} />
              )
            } else {
              return (
                <Route path='*' status={404} component={NotFound} />
              )
            }
          }} />
        </App>
      </Router>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
