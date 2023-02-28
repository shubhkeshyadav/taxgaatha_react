import RegisterFrorm from "../../components/auth/RegisterFrorm";
import PageHeader from "../../components/layout/PageHeader";
const Register = () => {
  return (
    <>
      <PageHeader
        status="completed"
        title="User Register"
        breadcrumb={["User Register"]}
      />
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="single-page">
              <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
                <div className="wrapper wrapper2 border">
                  <RegisterFrorm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
