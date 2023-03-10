const URL = process.env.REACT_APP_API_URL;

export const getFilters = async (page = false) => {
  try {
    const apiurl = URL + "/filters?page=" + page;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const recordListing = async (url) => {
  try {
    const apiurl = URL + "/" + url;

    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const actRuleDetail = async (param) => {
  try {
    const apiurl = URL + "/gst/" + param.type + "/" + param.slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const chapterDetail = async (slug) => {
  try {
    const apiurl = URL + "/gst/chapter-detail/" + slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getScheduleDetail = async (slug) => {
  try {
    const apiurl = URL + "/gst/schedule-detail/" + slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const notificationOrderDetail = async (param) => {
  try {
    const apiurl = URL + "/gst/" + param.type + "/" + param.slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const lawDetail = async (param) => {
  try {
    const apiurl = URL + "/gst/law/" + param.slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const gstFormDetail = async (param) => {
  try {
    const apiurl = URL + "/gst/forms/" + param.slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};
