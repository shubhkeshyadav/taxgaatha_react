import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import { customerChangePassword } from "../../lib/api";
import { displayError } from "../../hooks/useHelper.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassForm = (props) => {
  const [formData, setFormData] = useState({ email: props.email });
  const navigation = useNavigate();
  const {
    sendRequest,
    status,
    data: responseData,
    error,
  } = useHttp(customerChangePassword);

  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest(formData);
  };

  const changeHander = (event) => {
    let newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const emailErr = displayError("email", status, responseData);
  const otpErr = displayError("otp", status, responseData);
  const passErr = displayError("password", status, responseData);

  if (status === "completed") {
    navigation("/user/login");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="card-body"
      tabIndex={500}
      method="post"
      name="reset_password_frm"
    >
      @csrf
      <div className="mail">
        <input
          name="email"
          readOnly
          value={props.email}
          className={emailErr ? "is-invalid state-invalid" : ""}
        />
        {emailErr && <div className="invalid-feedback">{emailErr}</div>}

        <label>Email</label>
      </div>
      <div className="mail">
        <input
          type="text"
          id="otp"
          name="otp"
          maxLength={50}
          onChange={changeHander}
          className={otpErr ? "is-invalid state-invalid" : ""}
        />
        {otpErr && <div className="invalid-feedback">{otpErr}</div>}

        <label>OTP</label>
        <p>
          <i className="text-success">
            We have sent an OTP in above email to reset password. Please check
            your email and enter same.
          </i>
          <a>Click to re-send OTP</a>
        </p>
      </div>
      <div className="mail">
        <input
          type="password"
          id="password"
          name="password"
          maxLength={50}
          onChange={changeHander}
          className={passErr ? "is-invalid state-invalid" : ""}
        />
        {passErr && <div className="invalid-feedback">{passErr}</div>}
        <label>Password</label>
      </div>
      <div className="mail">
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          maxLength={50}
          onChange={changeHander}
        />
        <label>Confirm Password</label>
      </div>
      <div className="submit">
        <button className="btn btn-primary btn-block">
          {" "}
          {status === "pending" ? "Loadig..." : "Submit"}
        </button>
      </div>
      <p className="mb-2">
        <Link to="/user/login">Back to login</Link>
      </p>
    </form>
  );
};

export default ResetPassForm;
