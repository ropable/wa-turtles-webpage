// @flow
import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(
      this
    );
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <form>
              <input
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextInputChange}
              />
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default SearchBar;
