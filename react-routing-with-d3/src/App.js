import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route, HashRouter } from 'react-router-dom';
import BarChart from './components/BarChart';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('/data.json')
      .then(resp => resp.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            <Link to="/">Home</Link> |
            <Link to="/bar-graph">Bar Graph Example</Link> |
            <Link to="/graph2">Graph #2</Link>
          </p>
          <div>
            <Route path="/" exact={true} render={() => <h1>Home</h1>} />

            <Route path="/bar-graph"
              render={() => <BarChart data={this.state.data} width="960" height="500" />} />

            <Route path="/graph2" render={() => <h1>Graph 2 here</h1>} />
          </div>

        </div>
      </HashRouter>
    );
  }
}

export default App;
