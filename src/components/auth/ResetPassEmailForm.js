import { Link } from "react-router-dom";
import { useRef } from "react";
import useHttp from "../../hooks/useHttp";
import { forgotPasswordEmailValidation } from "../../lib/api";
import { displayError } from "../../hooks/useHelper";

const ResetPassEmailForm = (props) => {
  const emailRef = useRef();
  const {
    sendRequest,
    status,
    data: responseData,
    error,
  } = useHttp(forgotPasswordEmailValidation);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    sendRequest({ email });
  };

  const emailErr = displayError("email", status, responseData);

  if (status === "completed" && responseData.data.email !== "undefined") {
    props.setIsEmailVerified(responseData.data.email);
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="card-body"
      tabIndex={500}
      method="post"
      name="reset_password"
    >
      <div className="mail">
        <input
          type="text"
          id="email"
          name="email"
          maxLength={50}
          ref={emailRef}
          className={emailErr ? "is-invalid state-invalid" : ""}
        />
        {emailErr && <div className="invalid-feedback">{emailErr}</div>}
        <label>Email</label>
      </div>
      <div className="submit">
        <button type="submit" className="btn btn-primary btn-block">
          Next
        </button>
      </div>
      <p className="mb-2">
        <Link to="/user/login">Back to login</Link>
      </p>
    </form>
  );
};

export default ResetPassEmailForm;
