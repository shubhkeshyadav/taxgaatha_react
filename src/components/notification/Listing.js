import ListLayout from "./ListLayout";
import ListSingleItem from "./ListSingleItem";
import { useEffect } from "react";
import { recordListing } from "../../lib/gst";
import useHttp from "../../hooks/useHttp";
import { useSearchParams, useLocation } from "react-router-dom";
import SkeletonUi from "../layout/Skeleton";
import Pagination from "../layout/Pagination";

const Listing = (props) => {
  const { type } = props;
  const { sendRequest, status, data, error } = useHttp(recordListing, true);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const pageNo = searchParams.get("page") ? searchParams.get("page") : 1;

  const onPageChange = (pageNo) => {
    let allParams = Object.fromEntries([...searchParams]);
    setSearchParams({ ...allParams, page: pageNo });
  };

  useEffect(() => {
    const url = "gst/" + type + "/listing" + location.search;
    sendRequest(url);
  }, [sendRequest, location]);

  let content;
  let dataNotFound = false;
  let paginationData;

  if (status === "error") {
    dataNotFound = true;
  }

  if (status === "completed") {
    if (typeof data.data.result != "undefined" && data.data.result.length > 0) {
      content = data.data.result.map((dt) => {
        return <ListSingleItem type={type} key={dt.id} dt={dt} />;
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

  if (dataNotFound === true) {
    content = (
      <>
        <div className="card-body pt-0 pt-md-5">
          <div className="item-card9">
            <h4 className="text-center text-danger">
              {process.env.REACT_APP_DATA_NOT_FOUND}
            </h4>
          </div>
        </div>
      </>
    );
  }

  return (
    <ListLayout>
      <div className="card overflow-hidden br-0 overflow-hidden">
        <div className="d-md-flex">
          <div className="card overflow-hidden  border-0 box-shadow-0 border-start br-0 mb-0">
            {status == "pending" && <SkeletonUi height={40} count={3} />}
            {content}
          </div>
        </div>
      </div>
      {paginationData && (
        <div className="center-block text-center">{paginationData}</div>
      )}
    </ListLayout>
  );
};

export default Listing;
