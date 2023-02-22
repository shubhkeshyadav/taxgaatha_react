import React from "react";
import DetailLeftSideBar from "../../include/DetailLeftSideBar";
import NextPrevButton from "../../include/NextPrevButton";

const ScheduleDetail = (props) => {
  const { data } = props;

  const otherSchedule = data?.currentSchedule?.act?.act_schedules
    ? data.currentSchedule.act.act_schedules
    : null;

  const currentSlug = data?.currentSchedule?.slug
    ? data.currentSchedule.slug
    : null;

  const nextData = data?.next?.slug
    ? "/gst/schedule-detail/" + data.next.slug
    : null;
  const prevData = data?.prev?.slug
    ? "/gst/schedule-detail/" + data.prev.slug
    : null;

  return (
    <>
      {otherSchedule && otherSchedule.length > 0 && (
        <DetailLeftSideBar
          title="Schedules List"
          currentSlug={currentSlug}
          otherData={otherSchedule}
          baseUrl="/gst/schedule-detail/"
          displayKey="schedule_no"
        />
      )}
      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 web-current-tenders ajax-table-data">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="center-block text-center">
              <NextPrevButton prevData={prevData} nextData={nextData} />
              <h3>
                {data?.currentSchedule?.schedule_no
                  ? data.currentSchedule.schedule_no
                  : "--"}
              </h3>
            </div>
            <div className="card overflow-hidden">
              <div className="row no-gutters blog-list">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="card-header">
                    <h3 className="card-title fs-18">
                      {data?.currentSchedule?.schedule_title
                        ? data.currentSchedule.schedule_title
                        : "--"}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="item7-card-desc d-flex mb-1">
                      <a href={undefined}>
                        <i className="fa fa-calendar-o text-muted me-2 text-primary" />
                        Year:
                        {data?.currentSchedule?.act?.year
                          ? data.currentSchedule.act.year
                          : "--"}
                      </a>
                      <a href={undefined}>
                        <i className="fa fa-calendar-o text-muted me-2 text-primary" />
                        State:
                        {data?.currentSchedule?.act?.state?.name
                          ? data.currentSchedule.act.state.name
                          : "--"}
                      </a>
                      <a href={undefined}>
                        <i className="fa fa-calendar-o text-muted me-2 text-primary"></i>
                        Schedule No:{" "}
                        {data?.currentSchedule?.schedule_title
                          ? data.currentSchedule.schedule_title
                          : "--"}
                      </a>
                    </div>
                    <p
                      className="mb-1"
                      dangerouslySetInnerHTML={{
                        __html: data?.currentSchedule?.schedule_details
                          ? data.currentSchedule.schedule_details
                          : "--",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NextPrevButton prevData={prevData} nextData={nextData} />
      </div>
    </>
  );
};

export default ScheduleDetail;
