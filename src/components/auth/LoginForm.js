import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import { displayError } from "../../hooks/useHelper";
import { userLogin } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({});
  const navigation = useNavigate();

  const { sendRequest, status, data: responseData, error } = useHttp(userLogin);

  const changeHander = (event) => {
    let newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest(formData);
  };

  if (status === "completed") {
    setTimeout(() => {
      navigation("/user/profile");
    }, 2000);
  }

  const emailErr = displayError("email", status, responseData);
  const passwordErr = displayError("password", status, responseData);

  return (
    <section className="sptb">
      <div className="container customerpage">
        <div className="row">
          <div className="single-page">
            <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
              <div className="wrapper wrapper2 border">
                <form
                  onSubmit={submitHandler}
                  className="card-body"
                  tabIndex={500}
                  method="post"
                  autoComplete="off"
                  id="userLogin"
                >
                  <div className="mail">
                    <input
                      type="email"
                      name="email"
                      maxLength={50}
                      onChange={changeHander}
                      className={emailErr ? "is-invalid state-invalid" : ""}
                    />
                    {emailErr && (
                      <div className="invalid-feedback">{emailErr}</div>
                    )}

                    <label>Email</label>
                  </div>
                  <div className="passwd">
                    <input
                      type="password"
                      name="password"
                      maxLength={16}
                      onChange={changeHander}
                      className={passwordErr ? "is-invalid state-invalid" : ""}
                    />
                    {passwordErr && (
                      <div className="invalid-feedback">{passwordErr}</div>
                    )}

                    <label>Password</label>
                  </div>
                  <div className="submit">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </div>
                  <p className="mb-2">
                    <Link to="/user/reset-password">Forgot Password</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
