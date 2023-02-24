import { Link } from "react-router-dom";
const SingleListItem = (props) => {
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
          <Link to={"/gst/law/" + dt.slug} className="me-4 text-dark  ">
            <b>{dt?.title ? dt.title : "--"}</b>
          </Link>
          <br />
          <Link to={"/gst/law/" + dt.slug} className="me-4">
            <span>
              <b>Court</b>:{dt?.court?.name ? dt.court.name : "--"}
            </span>
          </Link>
          <Link to={"/gst/law/" + dt.slug} className="me-4">
            <span>
              <b>State</b>:
            </span>
            {dt?.state?.name ? dt.state.name : "--"}
          </Link>
          <Link to={"/gst/law/" + dt.slug} className="me-4">
            <span>
              <b>Release Year</b>:{dt?.year ? dt.year : "--"}
            </span>
            {}
          </Link>
        </p>
        <div className="mb-0 leading-tight">
          <p
            dangerouslySetInnerHTML={{
              __html: dt?.short_description ? dt.short_description : "--",
            }}
          />
          <Link
            to={"/gst/law/" + dt.slug}
            className="btn btn-outline-success btn-sm employers-btn"
          >
            <i className="fa fa-book" />
            Read More
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SingleListItem;
