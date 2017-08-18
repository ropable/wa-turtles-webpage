// @flow
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';

class ResourceRow extends Component {
  render() {
    let r = this.props.resource;
    return (
      <ListGroupItem key={r.id} header={r.name}>
        <Button bsStyle="primary" bsSize="xsmall" href={r.url}>
          <Glyphicon glyph="download" />&nbsp; Download ({r.format})
        </Button>
        <ReactMarkdown source={r.description} containerTagName="span" />
      </ListGroupItem>
    );
  }
}

export default ResourceRow;
