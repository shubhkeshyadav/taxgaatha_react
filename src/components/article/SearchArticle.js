import React, { useRef, useEffect } from "react";

const SearchArticle = (props) => {
  const nameRef = useRef();
  const onKeywordSearch = () => {
    const keyword = nameRef.current.value;
    props.onKeywordSearch(keyword);
  };
  useEffect(() => {
    nameRef.current.value = props.keyword;
  }, [props]);
  return (
    <div className="card">
      <div className="card-body">
        <div className="input-group">
          <input
            onBlur={onKeywordSearch}
            ref={nameRef}
            type="text"
            className="form-control br-tl-3  br-bl-3"
            placeholder="Search"
          />
          <button
            onClick={onKeywordSearch}
            type="button"
            className="btn btn-primary br-tr-3  br-br-3"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchArticle;
