import PropTypes from 'prop-types';

const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </label>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default FormInput;
