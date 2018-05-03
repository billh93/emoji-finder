import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EmojiResultsRow extends PureComponent {
  render() {
    // Get symbol code
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    // Place it into URL to load emoji image from 3rd party server
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <img
          alt={this.props.title}
          src={src}
        />
        <span
          className="title"
        >
          {this.props.title}
        </span>
        <span className="info">
          Click to copy emoji
        </span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};
export default EmojiResultsRow;
