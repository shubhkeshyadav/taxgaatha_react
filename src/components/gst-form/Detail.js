import { useEffect } from "react";
import { gstFormDetail } from "../../lib/gst";
import useHttp from "../../hooks/useHttp";
import { useParams } from "react-router-dom";
import SkeletonUi from "../layout/Skeleton";
import NextPrevButton from "../include/NextPrevButton";

const Detail = () => {
  const { sendRequest, status, data, error } = useHttp(gstFormDetail, true);
  const param = useParams();
  const slug = param.slug;
  let dt;

  useEffect(() => {
    sendRequest({ slug });
  }, [sendRequest, slug]);

  if (status === "completed" && typeof data.data.result !== "undefined") {
    dt = data.data.result;
  }
  const prevData = data?.data?.prev?.slug
    ? "/gst/forms/" + data.data.prev.slug
    : null;

  const nextData = data?.data?.next?.slug
    ? "/gst/forms/" + data.data.next.slug
    : null;

  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card overflow-hidden br-0 overflow-hidden">
              <div className="d-md-flex">
                <div className="card overflow-hidden  border-0 box-shadow-0 border-start br-0 mb-0">
                  <div className="card-body pt-0 pt-md-5">
                    {status === "pending" && (
                      <SkeletonUi height={70} count={5} />
                    )}

                    {status === "error" && (
                      <h2 className="text-danger text-center">
                        {process.env.REACT_APP_DATA_NOT_FOUND}
                      </h2>
                    )}

                    {status === "completed" && dt && (
                      <div className="item-card9">
                        <div className="mt-2 mb-2">
                          <a href={undefined} className="me-4 text-dark ">
                            <b>{dt.title}</b>
                          </a>
                          <br />
                          <span>
                            <b>Category.: </b>{" "}
                            {dt?.category?.name ? dt.category.name : "--"}
                          </span>
                        </div>
                        <div
                          className="mb-0 leading-tight"
                          dangerouslySetInnerHTML={{
                            __html: dt?.description ? dt.description : "--",
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
                            <i className="fa fa-book" /> Download Details{" "}
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
  );
};

export default Detail;
