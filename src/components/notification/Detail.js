import { useEffect } from "react";
import DetailLayout from "./DetailLayout";
import SkeletonUi from "../layout/Skeleton";
import useHttp from "../../hooks/useHttp";
import { notificationOrderDetail } from "../../lib/gst";
import NextPrevButton from "../include/NextPrevButton";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  const { sendRequest, status, data, error } = useHttp(
    notificationOrderDetail,
    true
  );
  const slug = param.slug;
  const type = param.type;
  let currentData;
  let file;

  const prevData = data?.data?.prev?.slug
    ? "/gst/" + type + "/" + data.data.prev.slug
    : null;

  const nextData = data?.data?.next?.slug
    ? "/gst/" + type + "/" + data.data.next.slug
    : null;

  useEffect(() => {
    sendRequest({ type, slug });
  }, [sendRequest, slug]);

  if (status === "completed" && typeof data.data.result !== "undefined") {
    currentData = data.data.result;
    if (typeof data.data.result.file !== "undefined" && data.data.result.file) {
      file = data.data.result.file;
    }
  }

  return (
    <DetailLayout>
      <div className="card overflow-hidden br-0 overflow-hidden">
        <div className="d-md-flex">
          <div className="card overflow-hidden  border-0 box-shadow-0 border-start br-0 mb-0">
            <div className="card-body pt-0 pt-md-5">
              {status === "pending" && <SkeletonUi height={60} count={5} />}
              {status === "error" && (
                <h2 className="text-danger text-center">
                  {process.env.REACT_APP_DATA_NOT_FOUND}
                </h2>
              )}
              {status === "completed" && currentData && (
                <div className="item-card9">
                  <div className="mt-2 mb-2">
                    <a href={undefined} className="me-4 text-dark ">
                      <b>{currentData?.title ? currentData.title : "--"}</b>
                    </a>
                    <br />
                    <span>
                      <b>Ref. No: </b>
                      {currentData?.reference_no
                        ? currentData.reference_no
                        : "--"}
                      |
                    </span>
                    <span>
                      <b>Categories: </b>
                      {currentData?.act_category?.name
                        ? currentData.act_category.name
                        : "--"}
                      |
                    </span>
                    <span>
                      <b>Date: </b>
                      {currentData?.notification_date
                        ? currentData.notification_date
                        : "--"}
                    </span>
                  </div>

                  <div
                    className="mb-0 leading-tight"
                    dangerouslySetInnerHTML={{
                      __html: currentData?.short_description
                        ? currentData.short_description
                        : "--",
                    }}
                  />
                </div>
              )}
            </div>
            {file && (
              <div className="card-footer pt-3 pb-3">
                <div className="item-card9-footer d-flex">
                  <div className="ms-auto">
                    <a
                      href={file}
                      className="btn btn-outline-success btn-sm employers-btn"
                    >
                      <i className="fa fa-book" /> Download Details
                      <i className="fa fa-download" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <NextPrevButton prevData={prevData} nextData={nextData} />
    </DetailLayout>
  );
};

export default Detail;
