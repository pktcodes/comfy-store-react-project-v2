import PropTypes from "prop-types";

const FormCheckbox = ({ label, name, size, defaultValue }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label  cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        className={`checkbox-primary checkbox ${size}`}
        defaultChecked={defaultValue}
      />
    </div>
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  defaultValue: PropTypes.bool,
};

export default FormCheckbox;
