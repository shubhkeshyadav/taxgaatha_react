import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

import ForgotPassword from "./../pages/auth/ForgotPassword";

Notify.init({
  showOnlyTheLastOne: true,
});

const URL = process.env.REACT_APP_API_URL;
export const contactUsEnquiry = async (postData) => {
  try {
    Loading.hourglass("Loading..");

    const apiurl = URL + "/contact-us";
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 200 && data.success === true) {
      Notify.success(data.msg);
    }
    Loading.remove();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    Loading.remove();
    throw new Error(error.message);
  }
};

export const userRegister = async (postData) => {
  try {
    Loading.hourglass("Loading..");

    const apiurl = URL + "/user-register";
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 200 && data.success === true) {
      Notify.success(data.msg);
    }
    Loading.remove();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    Loading.remove();
    throw new Error(error.message);
  }
};

export const userLogin = async (postData) => {
  try {
    Loading.hourglass("Loading..");

    const apiurl = URL + "/user-login";
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 200 && data.success === true) {
      Notify.success(data.msg);
    }
    Loading.remove();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    Loading.remove();
    throw new Error(error.message);
  }
};

export const forgotPasswordEmailValidation = async (postData) => {
  try {
    Loading.hourglass("Loading..");

    const apiurl = URL + "/user-reset-pass-validate-email";
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 200 && data.success === true) {
      Report.success("OTP Sent", data.msg);
    }
    Loading.remove();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    Loading.remove();
    throw new Error(error.message);
  }
};

export const customerChangePassword = async (postData) => {
  try {
    Loading.hourglass("Loading..");

    const apiurl = URL + "/user-reset-pass";
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postData),
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 200 && data.success === true) {
      Report.success("Success", data.msg);
    }
    Loading.remove();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    Loading.remove();
    throw new Error(error.message);
  }
};
