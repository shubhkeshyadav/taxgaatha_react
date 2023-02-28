import React from "react";
const Keyword = (props) => {
  const { changeHandler, param} = props;
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 mb-0 bg-white form-group">
      <input
        type="text"
        onChange={changeHandler}
        className="form-control input-lg br-tr-md-0 br-br-md-0"
        name="keyword"
        placeholder="Search"
        defaultValue={param.get("keyword") ? param.get("keyword") : ""}
      />
    </div>
  );
};

export default Keyword;
