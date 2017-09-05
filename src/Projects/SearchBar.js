// @flow
import * as React from "react";
import PropTypes from "prop-types";

type Props = {
  filterText: string,
  onFilterTextInput: PropTypes.func
};

export default class SearchBar extends React.Component<Props> {
  static defaultProps = {
    filterString: ""
  };

  handleFilterTextInputChange = (e: SyntheticInputEvent<>) => {
    this.props.onFilterTextInput(e.target.value);
  };

  render() {
    return (
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
    );
  }
}
