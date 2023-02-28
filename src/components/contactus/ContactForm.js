import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp.js";
import { contactUsEnquiry } from "../../lib/api";
import { displayError } from "../../hooks/useHelper.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const {
    sendRequest,
    status,
    data: responseData,
    error,
  } = useHttp(contactUsEnquiry);

  if (status === "completed") {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    sendRequest(formData);
  };

  const changeHander = (event) => {
    let newData = { ...formData };
    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const nameErr = displayError("name", status, responseData);
  const emailErr = displayError("email", status, responseData);
  const phoneErr = displayError("phone", status, responseData);
  const messageErr = displayError("message", status, responseData);

  return (
    <form
      onSubmit={submitHandler}
      id="contactus_form"
      className="card-body"
      tabIndex={500}
    >
      @csrf
      <div className="mail mb-5">
        <input
          type="text"
          name="name"
          id="name"
          onChange={changeHander}
          className={nameErr ? "is-invalid state-invalid" : ""}
        />
        {nameErr && <div className="invalid-feedback">{nameErr}</div>}
        <label>Full Name</label>
      </div>
      <div className="email mb-5">
        <input
          type="email"
          name="email"
          onChange={changeHander}
          className={emailErr ? "is-invalid state-invalid" : ""}
        />
        {emailErr && <div className="invalid-feedback">{emailErr}</div>}
        <label>Email Address</label>
      </div>
      <div className="email mb-5">
        <input
          type="text"
          name="phone"
          maxLength={13}
          onChange={changeHander}
          className={phoneErr ? "is-invalid state-invalid" : ""}
        />
        {phoneErr && <div className="invalid-feedback">{phoneErr}</div>}
        <label>Phone</label>
      </div>
      <div className="message mb-5">
        <textarea
          onChange={changeHander}
          className={`form-control ${
            messageErr ? "is-invalid state-invalid" : ""
          }`}
          name="message"
          rows={6}
        />
        {messageErr && <div className="invalid-feedback">{messageErr}</div>}
        <label>Message</label>
      </div>
      <div className="submit mb-0 col-md-6 text-center d-block mx-auto">
        <button
          disabled={status === "pending"}
          onClick={submitHandler}
          type="button"
          className="btn btn-primary btn-block"
        >
          {status === "pending" ? "Loadig..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
