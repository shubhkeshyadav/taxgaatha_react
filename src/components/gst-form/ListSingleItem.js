import { Link } from "react-router-dom";
const ListSingleItem = (props) => {
  const { dt, pageNo, index } = props;
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
          <a href="#" className="me-4 text-dark  ">
            <b>{dt?.title ? dt.title : "--"}</b>
          </a>
          <br />
          <a href={undefined} className="me-4">
            <span>
              <b>Category</b>:{dt?.category?.name ? dt.category.name : "--"}
            </span>
          </a>
        </p>
        <div className="mb-0 leading-tight">
          <p
            dangerouslySetInnerHTML={{
              __html: dt?.description ? dt.description : "--",
            }}
          />

          <Link
            to={`/gst/forms/` + dt.slug}
            className="btn btn-outline-success btn-sm employers-btn"
          >
            <i className="fa fa-book" />
            Read More
          </Link>
          {dt.file && (
            <a
              href={dt.file}
              className="btn btn-outline-success btn-sm employers-btn"
            >
              <i className="fa fa-book" /> Download Details
              <i className="fa fa-download" />
            </a>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ListSingleItem;
