import { useEffect } from "react";

//import Select from "react-select";

function Category(props) {
  useEffect(() => {}, []);

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  function logChange(val) {
    console.log("Selected: " + val);
  }

  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-0 bg-white form-group">
      {/* <Select
        name="form-field-name"
        className="form-control select2-show-search  border-bottom-0"
        options={options}
      /> */}

      {/* <Select
        options={options}
        name="form-field-name"
        placeholder="Select Category"
        isSearchable={true}
        className="form-control select2-show-search  border-bottom-0"
      /> */}
      <select
        name="state"
        className="form-control select2-show-search  border-bottom-0"
        data-placeholder="All State"
      >
        <optgroup label="Select State">
          <option value="">All State</option>
          {props.category &&
            props.category.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              );
            })}
        </optgroup>
      </select>
    </div>
  );
}

export default Category;
