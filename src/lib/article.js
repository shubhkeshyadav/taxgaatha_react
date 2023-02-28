const URL = process.env.REACT_APP_API_URL;

export const getAllArticle = async (apiurl) => {
  try {
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getArticleDetail = async (slug) => {
  try {
    const apiurl = URL + "/articles/detail/" + slug;
    const response = await fetch(apiurl);
    const statusCode = response.status;
    const data = await response.json();
    return { ...data, statusCode: statusCode };
  } catch (error) {
    throw new Error(error.message);
  }
};
