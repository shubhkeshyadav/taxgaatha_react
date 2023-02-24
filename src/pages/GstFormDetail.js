import Detail from "../components/gst-form/Detail";
import PageHeader from "../components/layout/PageHeader";
const GstFormDetail = () => {
  return (
    <>
      <PageHeader
        status="completed"
        title="GST Form Detail"
        breadcrumb={["GST Form Detail"]}
      />
      <Detail />;
    </>
  );
};

export default GstFormDetail;
