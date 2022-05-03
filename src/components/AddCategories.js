import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategories = ({ setCategories }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 1) {
      setCategories((categories) => [value, ...categories]);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
  
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};