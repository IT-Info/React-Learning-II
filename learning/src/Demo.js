import PropTypes from "prop-types";

export default function Demo({ prop }) {
  return <h1>Demo Component- - Prop Check {prop}</h1>;
}
Demo.propTypes = {
  prop: PropTypes.number,
};
