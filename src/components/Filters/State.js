import React from "react";

const State = (props) => {
  return (
    <div className="col-xl-2 col-lg-2 col-sm-2 col-md-2 select2-lg  mb-0 bg-white form-group">
      <select
        name="state"
        className="form-control select2-show-search  border-bottom-0"
        data-placeholder="All State"
      >
        <optgroup label="Select State">
          <option value="">All State</option>
          {props.states &&
            props.states.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.name}
                </option>
              );
            })}
        </optgroup>
      </select>
    </div>
  );
};

export default State;
