import PropTypes from "prop-types";
import { Component } from "react";


export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, percentage } = this.props;
    return (
      <ul>
        <li>
          <div>Good: {good}</div>
        </li>
        <li>
          <div>Neutral: {neutral}</div>
        </li>
        <li>
          <div>Bad: {bad}</div>
        </li>
        <li>
          <div>Total: {total}</div>
        </li>
        <li>
          <div>Positiv feedback: {percentage} %</div>
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
