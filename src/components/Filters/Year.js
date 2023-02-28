import React from "react";

const Year = (props) => {
  const { changeHandler, param, state } = props;

  return (
    <div className="col-xl-2 col-lg-2 col-sm-2 col-md-2 select2-lg  mb-0 bg-white form-group">
      <select
        onChange={changeHandler}
        name="year"
        className="form-control select2-show-search  border-bottom-0"
        data-placeholder="All Years"
        value={
          state.year ? state.year : param.get("year") ? param.get("year") : ""
        }
      >
        <optgroup label="Select Year">
          <option value="">All Years</option>
          {props.years &&
            props.years.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.year}
                </option>
              );
            })}
        </optgroup>
      </select>
    </div>
  );
};

export default Year;
