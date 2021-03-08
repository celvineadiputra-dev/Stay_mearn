import React from "react";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return <div></div>;
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]), //hanya terima button atau link
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  isDisabled: props.bool,
  isLoading: props.bool,
  isSmall: props.bool,
  isLarge: props.bool,
  isBlock: props.bool,
  hasShadow: props.bool,
};
