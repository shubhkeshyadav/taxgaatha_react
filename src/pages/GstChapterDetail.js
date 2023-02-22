import ChapterDetail from "../components/act-rules/detail/ChapterDetail";
import PageHeader from "../components/layout/PageHeader";
import useHttp from "../hooks/useHttp";
import { chapterDetail } from "../lib/gst";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SkeletonUi from "../components/layout/Skeleton";
import { Helmet } from "react-helmet";

const GstChapterDetail = () => {
  const {
    sendRequest,
    status,
    data: responseData,
  } = useHttp(chapterDetail, true);
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    sendRequest(slug);
  }, [sendRequest, slug]);

  const actTitle = responseData?.data?.currentChapter?.act?.title
    ? responseData.data.currentChapter.act.title
    : "--";

  const chapterTitle = responseData?.data?.currentChapter?.chapter_title
    ? responseData.data.currentChapter.chapter_title
    : "--";

  const meta_title = responseData?.data?.currentChapter?.meta_title
    ? responseData.data.currentChapter.meta_title
    : null;
  const meta_keyword = responseData?.data?.currentChapter?.meta_keyword
    ? responseData.data.currentChapter.meta_keyword
    : null;
  const meta_description = responseData?.data?.currentChapter?.meta_description
    ? responseData.data.currentChapter.meta_description
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
        breadcrumb={[chapterTitle]}
      />
      <section className="sptb">
        <div className="container">
          <div className="row">
            {status === "pending" && <SkeletonUi height={40} count={5} />}
            {status === "completed" && (
              <ChapterDetail data={responseData.data} />
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

export default GstChapterDetail;
