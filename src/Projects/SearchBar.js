// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

export default class SearchBar extends React.Component {
  static defaultProps = {
    filterString: ''
  };

  handleFilterTextInputChange = (e: SyntheticInputEvent<>) => {
    this.props.onFilterTextInput(e.target.value);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <form>
              <p>
                <input
                  type="text"
                  placeholder="Type to filter..."
                  value={this.props.filterText}
                  onChange={this.handleFilterTextInputChange}
                />
              </p>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  onFilterTextInput: PropTypes.func
};
