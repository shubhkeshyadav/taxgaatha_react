import { useState } from "react";
import ResetPassEmailForm from "./ResetPassEmailForm";
import ResetPassForm from "./ResetPassForm";
const ResetPass = () => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  return (
    <section className="sptb">
      <div className="container customerpage">
        <div className="row">
          <div className="single-page">
            <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
              <div className="wrapper wrapper2 border">
                {!isEmailVerified && (
                  <ResetPassEmailForm setIsEmailVerified={setIsEmailVerified} />
                )}
                {isEmailVerified && <ResetPassForm email={isEmailVerified} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPass;
