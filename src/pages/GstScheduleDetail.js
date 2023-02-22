import PageHeader from "../components/layout/PageHeader";
import useHttp from "../hooks/useHttp";
import { getScheduleDetail } from "../lib/gst";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SkeletonUi from "../components/layout/Skeleton";
import ScheduleDetail from "../components/act-rules/detail/ScheduleDetail";
import { Helmet } from "react-helmet";

const GstScheduleDetail = () => {
  const {
    sendRequest,
    status,
    data: responseData,
  } = useHttp(getScheduleDetail, true);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    sendRequest(slug);
  }, [sendRequest, slug]);

  const actTitle = responseData?.data?.currentSchedule?.act?.title
    ? responseData.data.currentSchedule.act.title
    : "--";
  const scheduleTitle = responseData?.data?.currentSchedule?.schedule_title
    ? responseData.data.currentSchedule.schedule_title
    : "--";

  const meta_title = responseData?.data?.currentSchedule?.meta_title
    ? responseData.data.currentSchedule.meta_title
    : null;
  const meta_keyword = responseData?.data?.currentSchedule?.meta_keyword
    ? responseData.data.currentSchedule.meta_keyword
    : null;
  const meta_description = responseData?.data?.currentSchedule?.meta_description
    ? responseData.data.currentSchedule.meta_description
    : null;

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
        status={status}
        title={actTitle}
        breadcrumb={[scheduleTitle]}
      />
      <section className="sptb">
        <div className="container">
          <div className="row">
            {status === "pending" && <SkeletonUi height={40} count={5} />}
            {status === "completed" && (
              <ScheduleDetail data={responseData.data} />
            )}

            {status === "error" && (
              <h2 className="text-danger text-center">
                {process.env.REACT_APP_DATA_NOT_FOUND}
              </h2>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default GstScheduleDetail;
