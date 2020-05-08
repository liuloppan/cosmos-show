import React, { Component } from 'react';
import './App.css';
import openspaceApi from 'openspace-api-js';

class App extends Component {
  constructor(props) {
    super(props);
    let api = this._api = openspaceApi('localhost', 4682);

    api.onDisconnect(() => {
      this.setState({
        connected: false
      });
    });

    api.onConnect(async () => {
      try {
        this.openspace = await api.library();
        console.info('connected!')
        this.setState({
          connected: true
        });
      }
      catch (e) {
        console.info('OpenSpace library could not be loaded: Error: \n', e)
        this.setState({
          connected: false
        });
        return;
      }
    })

    this.state = {
      connected: false
    }
    api.connect();
  }

  get connectionStatus() {
    if (this.state.connected) {
      return <div className="connection-status connection-status-connected">
        Connected to OpenSpace
      </div>
    }
    else {
      return <div className="connection-status connection-status-disconnected">
          Disconnected from OpenSpace
      </div>
    }
  }

  render() {
    return <div>
      {this.connectionStatus}
      <div className="main">
        This is where my GUI goes
      </div>
    </div>
  }
}

export default App;
