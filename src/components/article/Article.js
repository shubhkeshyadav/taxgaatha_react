import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
  return (
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card">
          <div className="row no-gutters blog-list">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="item7-card-img">
                <Link to={`/article/detail/${props.dt.slug}`}>
                  <img
                    src={`${props.dt.image}`}
                    alt="img"
                    className="cover-image"
                  />
                </Link>
                <div className="item7-card-text">
                  <span className="badge badge bg-success">
                    {props.dt.categories}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="card-body ">
                <div className="item7-card-desc d-flex mb-1">
                  <a href="#!">
                    <i className="fa fa-calendar-o text-muted me-2" />
                    {props.dt.release_date}
                  </a>
                  <a href="#!">
                    <i className="fa fa-user text-muted me-2" />
                    {props.dt.created_by.name}
                  </a>
                  {/* <div className="ms-auto">
                    <a className="me-0" href="#!">
                      <i className="fa fa-comment-o text-muted me-2" />1
                      Comments
                    </a>
                  </div> */}
                </div>
                <a href="#!" className="text-dark">
                  <h4 className="font-weight-semibold mb-4">
                    {props.dt.title}
                  </h4>
                </a>
                <p className="mb-1">{props.dt.description}</p>
                <Link
                  to={`/article/detail/${props.dt.slug}`}
                  className="btn btn-primary btn-sm mt-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
