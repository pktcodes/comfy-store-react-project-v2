import PropTypes from "prop-types";

const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string,
};

export default SubmitButton;
