import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';
import { Root } from './features/root';
import store from './redux';
// import Popup from './popups'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          {/*<Popup />*/}
          <ConnectedRouter history={history}>
              <Root />
          </ConnectedRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
