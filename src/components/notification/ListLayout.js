import React from "react";

const ListLayout = (props) => {
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default ListLayout;
