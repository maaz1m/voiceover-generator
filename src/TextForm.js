import React, { Component } from 'react';
import { TextAreaField, Flex, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Amplify, API } from 'aws-amplify';



class TextForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      API.post('vgapi', '', {body: {text: this.state.value}})
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.response);
        });

      event.preventDefault();
    
    }
  
    render() {
      return (
        <Flex  as="form" direction="column" onSubmit={this.handleSubmit}>
            <Heading level={3}>Generate</Heading>
            <TextAreaField value={this.state.value} onChange={this.handleChange} />
            <Button type="submit">Submit</Button>
        </Flex>
      );
    }
}

export default TextForm