import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Header from './Header';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Container id="mainContainer">
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;
