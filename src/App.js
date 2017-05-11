import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import papaparse from 'papaparse';

import 'semantic-ui-css/semantic.min.css';

import csvData from '../public/songgrid.csv';
import './App.css';

import Songs from './Songs';

class App extends Component {

  constructor() {
    super();
    this._parseData = this._parseData.bind(this);
    this.state = { data: [] };
  }

  componentDidMount() {
    this._parseData(csvData);
  }

  _parseData(data) {
    const self = this;
    papaparse.parse(data, {
      download: true,
      error: function(err, file, inputElem, reason) {
        console.log(err, file, inputElem, reason);
      },
      complete: function(parsed) {
        const tempData = [];
        parsed.data.map((d,i) => (
          tempData.push({
            _id: i,
            title: d[0],
            keywords: d[1],
            emotion: d[2],
            writer: d[3],
            source: d[4],
            year: d[5],
            idealKeys: d[6],
            tempo: d[7],
            time: d[8],
            range: d[9],
            structure: d[10],
            style: d[11],
            difficulty: d[12],
            addressedTo: d[13],
            iWe: d[14],
            driver: d[15],
          })
        ));
        self.setState({ data: tempData });
      }
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <Songs data={data} />
      </Container>
    );
  }
}

export default App;
