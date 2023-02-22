import { useEffect } from "react";

import React from "react";

function Category(props) {
  useEffect(() => {}, []);

  function logChange(val) {
    console.log("Selected: " + val);
  }

  return (
    <div className="col-xl-2 col-lg-2 col-sm-2 col-md-2 select2-lg  mb-0 bg-white form-group">
      <select
        name="state"
        className="form-control select2-show-search  border-bottom-0"
        data-placeholder="All Category"
      >
        <optgroup label="Select Category">
          <option value="">All State</option>
          {props.category &&
            props.category.map((el) => {
              return (
                <option key={el.value} value={el.value}>
                  {el.label}
                </option>
              );
            })}
        </optgroup>
      </select>
    </div>
  );
}

export default Category;
