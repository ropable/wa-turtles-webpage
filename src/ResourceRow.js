// @flow
import React, { Component } from 'react';
import { object } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';

type Props = { resource: object };

export default class ResourceRow extends Component<Props> {
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
