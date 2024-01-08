import { useState } from "react";
import PropTypes from "prop-types";

import { formatPrice } from "../utils";

const FormRange = ({ label, name, size, price }) => {
  const minPrice = 0;
  const maxPrice = 100000;
  const incrementPrice = 1000;

  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        id={name}
        name={name}
        className={`range range-primary ${size}`}
        min={minPrice}
        max={maxPrice}
        step={incrementPrice}
        value={selectedPrice}
        onChange={(event) => setSelectedPrice(event.target.value)}
      />
      <div className="mt-2 flex w-full justify-between px-2">
        <span className="text-xs font-bold">{minPrice}</span>
        <span className="text-xs font-bold capitalize">
          max : {formatPrice(maxPrice)}
        </span>
      </div>
    </div>
  );
};

FormRange.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.number,
};

export default FormRange;
