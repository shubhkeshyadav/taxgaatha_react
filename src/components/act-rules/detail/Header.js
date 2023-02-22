import React from "react";

const Header = (props) => {
  return (
    <>
      <div className="card-body">
        <div className="item7-card-desc d-flex mb-1">
          <a href={undefined}>
            <i className="fa fa-calendar-o text-muted me-2 text-primary" />
            State:{" "}
            {props.currentData?.state?.name
              ? props.currentData.state.name
              : "--"}
          </a>
          <a href={undefined}>
            <i className="fa fa-calendar-o text-muted me-2 text-primary" />
            Categories:
            {props.currentData?.act_category?.name
              ? props.currentData.act_category.name
              : "--"}
          </a>
          <a href={undefined}>
            <i className="fa fa-calendar-o text-muted me-2 text-primary" />
            Year: {props.currentData.year}
          </a>
        </div>
        <p
          className="mb-1"
          dangerouslySetInnerHTML={{
            __html: props.currentData?.short_description
              ? props.currentData?.short_description
              : "--",
          }}
        />
      </div>
    </>
  );
};

export default Header;
