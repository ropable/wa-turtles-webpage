// @flow
import React, { Component } from 'react';
import { object } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Button, Glyphicon, ListGroupItem } from 'react-bootstrap';
import TimeAgo from 'react-timeago';

type Props = { resource: object };

export default class ResourceRow extends Component<Props> {
  render() {
    const r = this.props.resource;
    const disallowedTypes = ['p'];
    if (r) {
      return (
        <ListGroupItem key={r.id} header={r.name} title="">
          <Glyphicon glyph="refresh" title="Resource last updated" />{' '}
          <TimeAgo date={r.last_modified} />
          <br />
          <Button
            bsStyle="primary"
            bsSize="xsmall"
            href={r.url}
            title={'Download resource'}
          >
            <Glyphicon glyph="download" />&nbsp; Download ({r.format})
          </Button>
          <ReactMarkdown
            source={r.description}
            containerTagName="span"
            disallowedTypes={disallowedTypes}
          />
        </ListGroupItem>
      );
    } else {
      return (
        <div>
          <h4>No resource</h4>
        </div>
      );
    }
  }
}
