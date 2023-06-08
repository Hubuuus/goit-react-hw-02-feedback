import PropTypes from "prop-types";
import { Component } from "react";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
