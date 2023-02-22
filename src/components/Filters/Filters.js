import React, { useEffect, useState } from "react";
import Category from "./Category";
import Keyword from "./Keyword";
import State from "./State";
import Year from "./Year";
import useHttp from "../../hooks/useHttp";
import { getFilters } from "../../lib/gst";

const Filters = (props) => {
  const { type } = props;
  const { sendRequest, status, data: filterData, error } = useHttp(getFilters);
  const [data, setData] = useState({});

  const changeHandler = (event) => {
    setData((prev) => {
      const obj = { ...prev };
      obj[event.target.name] = event.target.value;
      return obj;
    });
    console.log(data);
  };

  const applyFilter = () => {
    props.filterHandler(data);
  };

  useEffect(() => {
    sendRequest(type);
  }, []);

  let category, states, years;

  if (status === "completed") {
    if (typeof filterData.data.categories !== undefined) {
      category = filterData.data.categories;
    }
    if (typeof filterData.data.states !== undefined) {
      states = filterData.data.states;
    }
    if (typeof filterData.data.years !== undefined) {
      years = filterData.data.years;
    }
  }

  return (
    <div
      className="bannerimg cover-image bg-background3"
      data-image-src="{{asset('assets/images/banners/banner2.jpg')}}"
    >
      <div className="header-text mb-0">
        <div className="container">
          <div className="text-center text-white mb-6">
            <h1>GST {type}</h1>
            <ol className="breadcrumb text-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                GST {type}
              </li>
            </ol>
            <p>Search GST {type} Yearwise Here.</p>
          </div>
          <div className="row">
            <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
              <div className="search-background bg-transparent">
                <form method="get" id="search_form">
                  {/* {status === "pending" && <SkeletonUi count={5} />} */}

                  <div className="form row no-gutters ">
                    <Keyword changeHandler={changeHandler} />
                    <Category
                      category={category}
                      changeHandler={changeHandler}
                    />
                    <State states={states} />
                    <Year years={years} />
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 mb-0">
                      <a
                        onClick={applyFilter}
                        href={undefined}
                        className="btn btn-lg btn-block btn-secondary br-tl-md-0 br-bl-md-0"
                      >
                        <i className="fa fa-search" /> Search
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Filters);
