import PropTypes from "prop-types";
import { Component } from "react";

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
