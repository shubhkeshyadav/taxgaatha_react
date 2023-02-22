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
        if (data.success === true) {
          dispatch({ type: "SUCCESS", data: data });
        } else {
          ctx.gData.notifyWarning(data.error);
          dispatch({
            type: "ERROR",
            error: data.error || "Something went wrong!",
            data: data.data,
          });
        }
      } catch (error) {
        ctx.gData.notifyWarning(error.message);
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
