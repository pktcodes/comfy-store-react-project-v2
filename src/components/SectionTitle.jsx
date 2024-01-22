import PropTypes from "prop-types";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h1 className="text-3xl font-medium tracking-wider">{text}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};

export default SectionTitle;
