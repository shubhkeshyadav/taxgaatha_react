import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import { displayError } from "../../hooks/useHelper";
import { userRegister } from "../../lib/api";
import { useNavigate } from "react-router-dom";
const RegisterFrorm = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({});
  const {
    sendRequest,
    status,
    data: responseData,
    error,
  } = useHttp(userRegister);

  const changeHander = (event) => {
    let newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  if (status === "completed") {
    setTimeout(() => {
      navigation("/user-login");
    }, 2000);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest(formData);
  };

  const nameErr = displayError("name", status, responseData);
  const emailErr = displayError("email", status, responseData);
  const mobileErr = displayError("mobile", status, responseData);
  const passwordErr = displayError("password", status, responseData);

  return (
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
          type="text"
          name="name"
          maxLength={50}
          onChange={changeHander}
          className={nameErr ? "is-invalid state-invalid" : ""}
        />
        {nameErr && <div className="invalid-feedback">{nameErr}</div>}
        <label>Name</label>
      </div>
      <div className="mail">
        <input
          type="text"
          name="email"
          maxLength={50}
          onChange={changeHander}
          className={emailErr ? "is-invalid state-invalid" : ""}
        />
        {emailErr && <div className="invalid-feedback">{emailErr}</div>}
        <label>Email</label>
      </div>
      <div className="mail">
        <input
          type="text"
          name="mobile"
          maxLength={50}
          onChange={changeHander}
          className={mobileErr ? "is-invalid state-invalid" : ""}
        />
        {mobileErr && <div className="invalid-feedback">{mobileErr}</div>}
        <label>Mobile</label>
      </div>
      <div className="passwd">
        <input
          type="password"
          name="password"
          maxLength={16}
          onChange={changeHander}
          className={passwordErr ? "is-invalid state-invalid" : ""}
        />
        {passwordErr && <div className="invalid-feedback">{passwordErr}</div>}
        <label>Password</label>
      </div>
      <div className="passwd">
        <input
          type="password"
          name="password_confirmation"
          maxLength={16}
          onChange={changeHander}
        />
        <label>Confirm Password</label>
      </div>
      <div className="submit">
        <button className="btn btn-primary btn-block" type="submit">
          {status === "pending" ? "Loadig..." : "Submit"}
        </button>
      </div>
      <p className="mb-2">
        <a href={undefined}>Back to login</a>
      </p>
    </form>
  );
};

export default RegisterFrorm;
