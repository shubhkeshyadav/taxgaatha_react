import DetailLeftSideBar from "../../include/DetailLeftSideBar";
import NextPrevButton from "../../include/NextPrevButton";

const ChapterDetail = (props) => {
  const { data } = props;
  const nextData = data?.next?.slug
    ? "/gst/chapter-detail/" + data.next.slug
    : null;
  const prevData = data?.prev?.slug
    ? "/gst/chapter-detail/" + data.prev.slug
    : null;

  const otherChapters = data?.currentChapter?.act?.act_chapters
    ? data.currentChapter.act.act_chapters
    : null;

  const currentSlug = data?.currentChapter?.slug
    ? data.currentChapter.slug
    : null;

  return (
    <>
      {otherChapters && otherChapters.length > 0 && (
        <DetailLeftSideBar
          title="Sections/Rules List"
          currentSlug={currentSlug}
          otherData={otherChapters}
          baseUrl="/gst/chapter-detail/"
          displayKey="section_no"
        />
      )}
      <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 web-current-tenders ajax-table-data">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="center-block text-center">
              <NextPrevButton prevData={prevData} nextData={nextData} />
              <h3>
                {data?.currentChapter?.chapter_title
                  ? data.currentChapter.chapter_title
                  : "--"}
              </h3>
            </div>
            <div className="card overflow-hidden">
              <div className="row no-gutters blog-list">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="card-header">
                    <h3 className="card-title fs-18">
                      {data?.currentChapter?.section_no
                        ? data.currentChapter.section_no
                        : "--"}
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="item7-card-desc d-flex mb-1">
                      <a href={undefined}>
                        <i className="fa fa-calendar-o text-muted me-2 text-primary" />
                        Year:
                        {data?.currentChapter?.act?.year
                          ? data.currentChapter.act.year
                          : "--"}
                      </a>
                      <a href={undefined}>
                        <i className="fa fa-calendar-o text-muted me-2 text-primary" />
                        State:
                        {data?.currentChapter?.act?.state?.name
                          ? data.currentChapter.act.state.name
                          : "--"}
                      </a>
                    </div>
                    <p
                      className="mb-1"
                      dangerouslySetInnerHTML={{
                        __html: data?.currentChapter?.chapter_details
                          ? data.currentChapter.chapter_details
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

export default ChapterDetail;
