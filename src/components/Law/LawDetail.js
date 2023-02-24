import { useEffect } from "react";
import PageHeader from "../layout/PageHeader";
import useHttp from "../../hooks/useHttp";
import { lawDetail } from "../../lib/gst";
import SkeletonUi from "../layout/Skeleton";
import { useParams } from "react-router-dom";
import NextPrevButton from "../include/NextPrevButton";

const LawDetail = () => {
  const { sendRequest, status, data, error } = useHttp(lawDetail, true);
  const param = useParams();
  const slug = param.slug;
  let dt;

  useEffect(() => {
    sendRequest({ slug });
  }, [sendRequest, slug]);

  if (status === "completed" && typeof data.data.currentData !== "undefined") {
    dt = data.data.currentData;
  }
  const prevData = data?.data?.prev ? "/gst/law/" + data.data.prev : null;

  const nextData = data?.data?.next ? "/gst/law/" + data.data.next : null;
  return (
    <>
      <PageHeader status="completed" title="GST Law" breadcrumb={["GST Law"]} />
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card overflow-hidden br-0 overflow-hidden">
                <div className="d-md-flex">
                  <div className="card overflow-hidden  border-0 box-shadow-0 border-start br-0 mb-0">
                    {status === "pending" && (
                      <SkeletonUi height={70} count={5} />
                    )}

                    <div className="card-body pt-0 pt-md-5">
                      {status === "error" && (
                        <h2 className="text-danger text-center">
                          {process.env.REACT_APP_DATA_NOT_FOUND}
                        </h2>
                      )}

                      {status === "completed" && (
                        <div className="item-card9">
                          <div className="mt-2 mb-2">
                            <a href={undefined} className="me-4 text-dark ">
                              <b>{dt?.title ? dt.title : "--"}</b>
                            </a>
                            <br />
                            <span>
                              <b>Petitioner.: </b>
                              {dt?.petitioner ? dt.petitioner : "--"}|
                            </span>
                            <span>
                              <b>Respondent: </b>
                              {dt?.respondent ? dt.respondent : "--"}|
                            </span>
                            <span>
                              <b>Date: </b>
                              {dt?.release_date ? dt.release_date : "--"}|
                            </span>
                            <span>
                              <b>Order No: </b>
                              {dt?.order_no ? dt.order_no : "--"} |
                            </span>
                            <span>
                              <b>TR Citation: </b>
                              {dt?.tr_citation ? dt.tr_citation : "--"} |
                            </span>
                            <span>
                              <b>Reference No: </b>{" "}
                              {dt?.reference_no ? dt.reference_no : "--"}|
                            </span>
                            <span>
                              <b>State: </b>
                              {dt?.state?.name ? dt.state.name : "--"} |
                            </span>
                            <span>
                              <b>Year: </b> {dt?.year ? dt.year : "--"}
                            </span>
                          </div>
                          <div
                            className="mb-0 leading-tight"
                            dangerouslySetInnerHTML={{
                              __html: dt?.short_description
                                ? dt.short_description
                                : "--",
                            }}
                          />
                        </div>
                      )}
                    </div>
                    {status === "completed" && dt.file && (
                      <div className="card-footer pt-3 pb-3">
                        <div className="item-card9-footer d-flex">
                          <div className="ms-auto">
                            <a
                              href={dt.file}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LawDetail;
