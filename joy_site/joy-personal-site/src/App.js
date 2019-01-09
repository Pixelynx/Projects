import React, { Component } from 'react';
import Nav from './js/homepage/nav.js';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Nav />
        </div>
      </React.Fragment>
    )
  }

}

export default App;
