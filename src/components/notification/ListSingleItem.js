import { Link } from "react-router-dom";

const ListSingleItem = (props) => {
  const { dt, type } = props;
  return (
    <>
      <div className="card-body pt-0 pt-md-5">
        <div className="item-card9">
          <div className="mt-2 mb-2">
            <a href={undefined} className="me-4 text-dark ">
              <b>{dt?.title ? dt.title : "--"}</b>
            </a>
            <br />
            <span>
              <b>Ref. No.: </b> {dt?.reference_no ? dt.reference_no : "--"} |
              <>&nbsp;</>
            </span>
            <span>
              <b>Categories: </b>
              {dt?.act_category?.name ? dt.act_category.name : "--"} |
              <>&nbsp;</>
            </span>
            <span>
              <b>Date: </b>
              {dt?.notification_date ? dt.notification_date : "--"}
            </span>
          </div>
        </div>
      </div>
      <div className="card-footer pt-3 pb-3">
        <div className="item-card9-footer d-flex">
          <div className="ms-auto">
            <Link
              to={`/gst/${type}/${dt.slug}`}
              className="btn btn-outline-success btn-sm employers-btn"
            >
              <i className="fa fa-book" /> Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListSingleItem;
