import React from "react";
import { Link } from "react-router-dom";

const SingleItem = (props) => {
  const { pageNo, index } = props;
  let sr;
  if (pageNo > 1) {
    sr = parseInt(pageNo) + parseInt(index) + 1;
  } else {
    sr = parseInt(pageNo) + parseInt(index);
  }
  return (
    <tr>
      <td>{sr}-</td>
      <td>
        <p>
          <Link
            to={`/gst/${props.type}/${props.dt.slug}`}
            className="me-4 text-dark  "
          >
            <b>{props.dt.title}</b>
          </Link>
          <br />
          <a href={undefined} className="me-4">
            <span>
              <b>Categories</b>:
            </span>
            {props.dt.act_category.name}
          </a>
          <a href={undefined} className="me-4">
            <span>
              <b>State</b>:
            </span>
            {props.dt.state.name}
          </a>
          <a href={undefined} className="me-4">
            <span>
              <b>Release Year</b>:
            </span>
            {props.year}
          </a>
        </p>
        <p
          className="mb-0 leading-tight"
          dangerouslySetInnerHTML={{ __html: props.dt.short_description }}
        />

        <Link
          to={`/gst/${props.type}/${props.dt.slug}`}
          className="btn btn-outline-success btn-sm employers-btn align-right"
        >
          <i className="fa fa-book" /> Read More
        </Link>
      </td>
    </tr>
  );
};

export default SingleItem;
