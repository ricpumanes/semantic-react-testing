import React from 'react';
import { Table, Input, Dimmer, Loader } from 'semantic-ui-react';
import _ from 'underscore';

export default class Songs extends React.Component {

  constructor() {
    super();
    this._handleFilter = this._handleFilter.bind(this);
    this.state = { data: [] };
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      this.setState({ data: nextProps.data });
    }, 2 * 1000);
  }

  _renderTableData(data) {
    const tempRows = [];

    if (data && data.length > 0) {
      data.map((d,i) => (
        tempRows.push(
          <Table.Row key={i}>
            <Table.Cell>{d.title}</Table.Cell>
            <Table.Cell>{d.keywords}</Table.Cell>
            <Table.Cell>{d.emotion}</Table.Cell>
            <Table.Cell>{d.writer}</Table.Cell>
            <Table.Cell>{d.source}</Table.Cell>
            <Table.Cell>{d.year}</Table.Cell>
            <Table.Cell>{d.idealKeys}</Table.Cell>
            <Table.Cell>{d.tempo}</Table.Cell>
            <Table.Cell>{d.time}</Table.Cell>
            <Table.Cell>{d.range}</Table.Cell>
            <Table.Cell>{d.structure}</Table.Cell>
            <Table.Cell>{d.style}</Table.Cell>
            <Table.Cell>{d.difficulty}</Table.Cell>
            <Table.Cell>{d.addressedTo}</Table.Cell>
            <Table.Cell>{d.iWe}</Table.Cell>
            <Table.Cell>{d.driver}</Table.Cell>
          </Table.Row>
        )
      ));
    }

    return tempRows;
  }

  _handleFilter(event) {
    const currentData = this.props.data;
    const inputVal = event.currentTarget.value;

    this.setState({ data: currentData.filter(c => c.title.match(new RegExp(inputVal, 'ig'))) });

  }

  _handleSort(field) {
    const { data } = this.props;
    const sortedData = _.sortBy(data, field);
    this.setState({ data: sortedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Songs</h1>
        <Input placeholder='Filter By Title' onChange={this._handleFilter}/>
        <br />
        <br />
        <br />
        <div className="ewan">
          <Table sortable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'title')}>
                  Title
                </Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'keywords')}>Themes/key words</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'emotion')}>Function/Emotion</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'writer')}>Writer</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'source')}>Source</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'year')}>Year</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'idealKeys')}>I deal Key(s)*</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'tempo')}>Tempo</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'time')}>Time</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'range')}>Range</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'structure')}>Structure</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'style')}>Style</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'difficulty')}>Difficulty (vocal)</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'addressedTo')}>Addressed to</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'iWe')}>I / We</Table.HeaderCell>
                <Table.HeaderCell onClick={this._handleSort.bind(this,'driver')}>Driver</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                data && data.length > 0 ?
                this._renderTableData(data)
                :
                <Table.Row>
                  <Table.Cell>
                    <Dimmer active inverted>
                      <Loader inverted content='Loading' />
                    </Dimmer>
                  </Table.Cell>
                </Table.Row>
              }
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}
