import { useEffect } from "react";
import Pagination from "../layout/Pagination";
import ListLayout from "./ListLayout";
import SingleListItem from "./SingleListItem";
import useHttp from "../../hooks/useHttp";
import { recordListing } from "../../lib/gst";
import SkeletonUi from "../layout/Skeleton";
import { useSearchParams, useLocation } from "react-router-dom";

const Listing = () => {
  const { sendRequest, status, data, error } = useHttp(recordListing, true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const pageNo = searchParams.get("page") ? searchParams.get("page") : 1;

  let content, paginationData;

  const onPageChange = (pageNo) => {
    let allParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...allParams, page: pageNo });
  };

  useEffect(() => {
    const url = "gst/law/listing" + location.search;
    sendRequest(url);
  }, [sendRequest, location]);

  if (status === "completed") {
    if (typeof data.data.result != "undefined" && data.data.result.length > 0) {
      content = data.data.result.map((dt, index) => {
        return (
          <SingleListItem index={index} pageNo={pageNo} key={dt.id} dt={dt} />
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
  }

  return (
    <ListLayout>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">GST Law List</h3>
        </div>
        <div className="card-body">
          {status == "pending" && <SkeletonUi height={40} count={3} />}
          {status === "error" && (
            <h4 className="text-center text-danger">
              {process.env.REACT_APP_DATA_NOT_FOUND}
            </h4>
          )}
          {status == "completed" && (
            <div className="table-responsive border-top mb-0 ">
              <table className="table table-bordered table-hover  mb-0">
                <thead className="bg-primary text-white text-nowrap">
                  <tr>
                    <th className="text-white">S. No.</th>
                    <th className="text-white">List of Law</th>
                  </tr>
                </thead>
                <tbody>{content}</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {paginationData && paginationData}
    </ListLayout>
  );
};

export default Listing;
