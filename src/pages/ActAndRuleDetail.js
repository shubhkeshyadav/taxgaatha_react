import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Chapter from "../components/act-rules/detail/Chapter";
import Header from "../components/act-rules/detail/Header";
import Schedule from "../components/act-rules/detail/Schedule";
import TabMenue from "../components/act-rules/detail/TabMenue";
import PageHeader from "../components/layout/PageHeader";
import useHttp from "../hooks/useHttp";
import { actRuleDetail } from "./../lib/gst";
import SkeletonUi from "../components/layout/Skeleton";
import NextPrevButton from "../components/include/NextPrevButton";
import { Helmet } from "react-helmet";

const ActAndRuleDetail = () => {
  const param = useParams();
  const { sendRequest, status, data, error } = useHttp(actRuleDetail);
  const slug = param.slug;
  const type = param.type;

  useEffect(() => {
    sendRequest({ type, slug });
  }, [sendRequest, slug]);

  let currentData;
  let chapterData;
  let scheduleData;
  const meta_title = data?.data?.act?.meta_title
    ? data.data.act.meta_title
    : null;
  const meta_keyword = data?.data?.act?.meta_keyword
    ? data.data.act.meta_keyword
    : null;
  const meta_description = data?.data?.act?.meta_description
    ? data.data.act.meta_description
    : null;

  if (status === "completed" && typeof data.data.act !== "undefined") {
    currentData = data.data.act;
  }

  const prevData = data?.data?.prev?.slug
    ? "/gst/" + type + "/" + data.data.prev.slug
    : null;

  const nextData = data?.data?.next?.slug
    ? "/gst/" + type + "/" + data.data.next.slug
    : null;

  if (
    status === "completed" &&
    typeof data.data.act.act_chapters !== "undefined"
  ) {
    chapterData = data.data.act.act_chapters;
  }

  if (
    status === "completed" &&
    typeof data.data.act.act_schedules !== "undefined"
  ) {
    scheduleData = data.data.act.act_schedules;
  }

  return (
    <>
      <Helmet>
        {meta_title && <title>{meta_title}</title>}
        {meta_keyword && <meta name="keywords" content={meta_keyword} />}
        {meta_description && (
          <meta name="Description" content={meta_description} />
        )}
      </Helmet>

      <PageHeader
        status="completed"
        title={`GST ${type}`}
        breadcrumb={["GST " + type]}
      />
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card overflow-hidden">
                <div className="row no-gutters blog-list">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    {status === "pending" && (
                      <SkeletonUi height={70} count={5} />
                    )}

                    {status === "error" && (
                      <h2 className="text-danger text-center">
                        {process.env.REACT_APP_DATA_NOT_FOUND}
                      </h2>
                    )}

                    {currentData && status === "completed" && (
                      <>
                        <div className="card-header">
                          <h3 className="card-title fs-18">
                            {currentData?.title ? currentData.title : "--"}
                          </h3>
                        </div>
                        <Header currentData={currentData} />
                        <div className="card-footer">
                          <TabMenue currentData={currentData} />
                          <div className="card mb-0 border-0">
                            <div className="card-body p-0">
                              <div className="border-0">
                                <div className="tab-content">
                                  <div
                                    className="tab-pane active"
                                    id="table_of_contents"
                                  >
                                    <div className="card-body">
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: currentData?.table_content
                                            ? currentData.table_content
                                            : "--",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <Chapter chapterData={chapterData} />
                                  <Schedule scheduleData={scheduleData} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
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

export default ActAndRuleDetail;
