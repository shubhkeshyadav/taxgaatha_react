import { Helmet } from "react-helmet";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <>
      <div className="sptb bg-white">
        <div className="container">
          <div className="row">
            <h3 className="widget-title fs-16 mt-6">
              Support Number &amp; Email ID
            </h3>
            <hr className="widget-hr" />
            <div className="row">
              <div className="col-lg-12">
                <div className="card ">
                  <div className="card-body">
                    <div className="support">
                      <div className="row text-white">
                        <div className="col-xl-4 col-lg-12 col-md-12 border-end">
                          <div className="support-service bg-primary">
                            <i className="fa fa-phone" />
                            <h6>+91 8700954952</h6>
                            <p>Support number</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12 border-end">
                          <div className="support-service bg-success">
                            <i className="fa fa-clock-o" />
                            <h6>Mon-Sat(09:00 - 17:00)</h6>
                            <p>Working Hours!</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-12">
                          <div className="support-service bg-danger">
                            <i className="fa fa-envelope-o" />
                            <h6>support@taxgaatha.com</h6>
                            <p>Support email id</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="support">
                      <div className="row text-white">
                        <div className="col-xl-8 col-lg-12 col-md-8">
                          <div className="support-service bg-dark br-2">
                            <i className="fa fa-map-marker" />
                            <h6>Taxgaatha India Pvt. Ltd.</h6>
                            <p>
                              A-27A, Rama Park Uttam Nagar, New Delhi. India -
                              110059
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-12 col-md-4">
                          <div className="support-service bg-dark br-2">
                            <i className="fa fa-map" />
                            <h6>Google Map Direction</h6>
                            <p>
                              <a
                                href="https://www.google.com/maps/place/28%C2%B037'14.7%22N+77%C2%B002'12.2%22E/@28.6207456,77.0345443,17z/data=!4m5!3m4!1s0x0:0x78d09997088ddf54!8m2!3d28.6207456!4d77.036733?hl=en"
                                target="_blank"
                              >
                                Click to view direction
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="widget-title fs-16 mt-6">
              We are here to help you, submit your query to us.
            </h3>
            <hr className="widget-hr" />
            <div className="col-md-5">
              <div className="single-page">
                <div className="col-lg-12 col-xl-12 col-md-12 d-block mx-auto">
                  <div className="wrapper wrapper2">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Map location</h3>
                </div>
                <div className="card-body">
                  <div className="map-header">
                    <div className="map-header-layer" id="map2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="https://maps.google.com/maps/api/js?key=AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA"></script>
        <script src="assets/plugins/maps-google/jquery.googlemap.js"></script>
        <script src="assets/plugins/maps-google/map.js"></script>
      </Helmet>
    </>
  );
};

export default Contact;
