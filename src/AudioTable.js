import React, { Component } from 'react';
import {Table, TableCell, TableBody,TableHead, TableRow, Flex, Button, Heading } from '@aws-amplify/ui-react';
import {Amplify, API } from 'aws-amplify';

class AudioTable extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [{'id':'', 'audio':'', 'text':''}]};
    this.refreshTable = this.refreshTable.bind(this);
  }

  refreshTable() {
    console.log('clicked')
    API.get('vgapi', '', {queryStringParameters: {id: '*'}})
        .then((response) => {
          console.log(response)
          this.setState({
            data: response
          })
        })
        .catch((error) => {
          console.log(error.response);
        });
    
  }
  render() {

    return (
      <Flex direction="column">
        <Heading level={3}>History</Heading>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Link to Audio</TableCell>
              <TableCell>Original Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((val, key) => {
              return (
                <TableRow key={key}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell><a href={val.audio}>Link</a></TableCell>
                  <TableCell>{val.text}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <Button onClick={this.refreshTable}> Refresh </Button>
      </Flex>
    );
  }
}

export default AudioTable