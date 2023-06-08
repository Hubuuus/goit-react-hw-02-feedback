import PropTypes from "prop-types";
import { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul>
        {options.map(option => (
          <button type='submit' key={option} name={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </ul>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
