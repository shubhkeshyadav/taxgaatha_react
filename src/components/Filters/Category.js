//import { useEffect } from "react";
//import React from "react";
//import Select from "react-select";

function Category(props) {
  // const changeHandler = () => {
  //   console.log("Hello");
  // };

  const { changeHandler, param, state } = props;

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="col-xl-2 col-lg-2 col-sm-2 col-md-2 select2-lg  mb-0 bg-white form-group">
        {/* <Select
          className="form-control select2-show-search  border-bottom-0"
          options={options}
        /> */}
        <select
          onChange={changeHandler}
          name="category"
          className="form-control select2-show-search  border-bottom-0"
          data-placeholder="All Category"
          defaultValue={
            state.category
              ? state.category
              : param.get("category")
              ? param.get("category")
              : ""
          }
        >
          <optgroup label="Select Category">
            <option value="">All Category</option>
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
    </>
  );
}

export default Category;
