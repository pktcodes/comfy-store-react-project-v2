import PropTypes from "prop-types";

const FormSelect = ({ label, name, list, size, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.array,
  size: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default FormSelect;
