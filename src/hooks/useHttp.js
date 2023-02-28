import { useCallback, useReducer, useContext } from "react";
import WebContext from "../store/WebContaxt";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.data,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: action.data,
      error: action.error,
      status: "error",
    };
  }

  return state;
}

const useHttp = (requestFunction, startWithPending = false) => {
  const ctx = useContext(WebContext);

  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    status: startWithPending == true ? "pending" : null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const data = await requestFunction(requestData);
        if (data.statusCode === 200 && data.success === true) {
          dispatch({ type: "SUCCESS", data: data });
        } else if (data.statusCode === 422) {
          ctx.gData.notifyWarning(
            "Please make sure all fields are filled in correctly"
          );
          dispatch({
            type: "ERROR",
            error: "Validation Error",
            data: data.errors,
          });
        } else {
          ctx.gData.errorPopup(data.error);
          dispatch({
            type: "ERROR",
            error: data.error || "Something went wrong!",
            data: data.data,
          });
        }
      } catch (error) {
        dispatch({
          type: "ERROR",
          error: error.message || "Something went wrong!",
          data: null,
        });
      }
    },
    [requestFunction]
  );

  return { ...httpState, sendRequest };
};
export default useHttp;
