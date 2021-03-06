import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends PureComponent {
  handleChange = (event) => {
    this.props.textChange(event);
  }

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input
            placeholder="Type up emoji Ex. Dog"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  textChange: PropTypes.func,
};
export default SearchInput;
