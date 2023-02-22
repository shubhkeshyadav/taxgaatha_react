import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkeletonUi from "./Skeleton";

const PageHeader = (props) => {
  const { status } = props;
  return (
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
            <h1>
              {status && status === "pending" && "Loading"}
              {status && status !== "pending" && props.title}
            </h1>
            <ol className="breadcrumb text-center">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {props.breadcrumb.length > 0 &&
                props.breadcrumb.map((item) => {
                  return (
                    <li
                      key={item}
                      className="breadcrumb-item active text-white"
                    >
                      {item}
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
