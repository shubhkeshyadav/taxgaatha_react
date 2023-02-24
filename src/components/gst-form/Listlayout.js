import React from "react";

const Listlayout = (props) => {
  return (
    <>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  web-office-order web-paginate-data">
              {props.children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listlayout;
