import Contact from "../components/contactus/Contact";
import PageHeader from "../components/layout/PageHeader";

function Contactus() {
  return (
    <>
      <PageHeader
        status="completed"
        title={`Contact Us`}
        breadcrumb={["Contact Us"]}
      />
      <Contact />
    </>
  );
}

export default Contactus;
