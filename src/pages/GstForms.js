import Filters from "../components/Filters/Filters";
import Listing from "../components/gst-form/Listing";
const GstForms = () => {
  return (
    <>
      <Filters filterHandler={() => {}} type={"Form"} />
      <Listing />
    </>
  );
};

export default GstForms;
