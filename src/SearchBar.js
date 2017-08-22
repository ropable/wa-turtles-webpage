// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

type Props = {
  filterText: string,
  onFilterTextInput: PropTypes.func
};

export default class SearchBar extends React.Component<Props> {
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
                  placeholder="Search title or tagline..."
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
