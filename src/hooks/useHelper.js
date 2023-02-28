export const displayError = (inputname, status, errors) => {
  if (status === "error" && errors.hasOwnProperty(inputname)) {
    return errors[inputname][0];
  }
  return false;
};
