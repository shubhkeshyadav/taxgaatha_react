import React from "react";
import SingleItem from "./SingleItem";
import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { recordListing } from "../../lib/gst";
import SkeletonUi from "../layout/Skeleton";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../layout/Pagination";

const Listing = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  let dataNotFound = false;
  const { type } = props;
  const pageNo = searchParams.get("page") ? searchParams.get("page") : 1;

  const { sendRequest, status, data, error } = useHttp(recordListing);
  const onPageChange = (pageNo) => {
    let allParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...allParams, page: pageNo });
  };

  useEffect(() => {
    const url = "gst/" + type + "/listing" + location.search;
    sendRequest(url);
  }, [sendRequest, location]);

  let content;
  let paginationData;
  if (status === "completed") {
    if (typeof data.data.result != "undefined" && data.data.result.length > 0) {
      content = data.data.result.map((dt, index) => {
        return (
          <SingleItem
            pageNo={pageNo}
            index={index}
            type={type}
            key={dt.id}
            dt={dt}
          />
        );
      });
      paginationData = (
        <Pagination
          currentPage={pageNo}
          totalItems={data.data.total_records}
          onPageChange={onPageChange}
        />
      );
    }

    if (typeof data.data.result == "undefined") {
      dataNotFound = true;
    } else if (data.data.result.length < 1) {
      dataNotFound = true;
    }
  }
  if (status === "error") {
    dataNotFound = true;
  }

  if (dataNotFound === true) {
    content = (
      <tr>
        <td colSpan="2">
          <h3 className="text-danger text-center">
            {process.env.REACT_APP_DATA_NOT_FOUND}
          </h3>
        </td>
      </tr>
    );
  }
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">GST {type} List</h3>
                </div>
                <div className="card-body">
                  <div className="table-responsive border-top mb-0 ">
                    <table className="table table-bordered table-hover  mb-0">
                      <thead className="bg-primary text-white text-nowrap">
                        <tr>
                          <th className="text-white">S. No.</th>
                          <th className="text-white">List of {type}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {status === "pending" && (
                          <tr>
                            <td colSpan="2">
                              <SkeletonUi height={40} count={3} />
                            </td>
                          </tr>
                        )}
                        {content}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {paginationData && (
                <div className="center-block text-center">{paginationData}</div>
              )}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
