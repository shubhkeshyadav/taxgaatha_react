import React from "react";

function About() {
  return (
    <>
      <div
        className="bannerimg cover-image bg-background3"
        data-image-src="assets/images/banners/banner2.jpg"
        style={{
          backgroundImage: "assets/images/banners/banner1.jpg",
          backgroundPosition: "center center",
        }}
      >
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white ">
              <h1 className="">About Us</h1>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>

                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  About Us
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header text-center">
                  <h3 className="card-title ">Who we are</h3>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <p>Details about Taxgaatha india.</p>
                  </div>
                </div>
                <div className="card-header text-center">
                  <h3 className="card-title ">Mission &amp; Vision</h3>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <p>Details about Taxgaatha india.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sptb  bg-white">
        <div className="container">
          <div className="section-title center-block text-center">
            <h1>About Board member</h1>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
          <div className="row no-gutters  row-deck find-job">
            <div className="col-md-4 col-sm-4">
              <div className="p-0 mt-5 mt-md-0 border box-shadow2 w-100">
                <div className="card-body text-center">
                  <div className="bg-warning icon-bg  icon-service  text-purple mb-4">
                    <img
                      src="../assets/images/svgs/jobs/user.svg"
                      className="border brround avatar-md w-100 h-100"
                      alt="Sales"
                    />
                  </div>
                  <h4 className="mb-2 fs-18 font-weight-semibold">
                    Mr. Employee full Name
                  </h4>
                  <p>CA, Taxgaatha India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="bg-light p-0 box-shadow2 border-transparent w-100">
                <div className="card-body text-center">
                  <div className="bg-success icon-bg  icon-service text-purple mb-4">
                    <img
                      src="../assets/images/svgs/jobs/user.svg"
                      className="border brround avatar-md w-100 h-100"
                      alt="Sales"
                    />
                  </div>
                  <h4 className="mb-2 fs-18 font-weight-semibold">
                    Mr. Employee full Name
                  </h4>
                  <p>President, Taxgaatha India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="p-0 mt-5 mt-md-0 border box-shadow2 w-100">
                <div className="card-body text-center">
                  <div className="bg-warning icon-bg  icon-service text-purple mb-4">
                    <img
                      src="../assets/images/svgs/jobs/user.svg"
                      className="border brround avatar-md w-100 h-100"
                      alt="Sales"
                    />
                  </div>
                  <h4 className="mb-2 fs-18 font-weight-semibold">
                    Mr. Employee full Name
                  </h4>
                  <p>President, Taxgaatha India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
