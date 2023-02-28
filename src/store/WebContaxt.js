import React, { createContext, useState } from "react";
import Notiflix from "notiflix";

const WebContext = createContext();

Notiflix.Notify.init({
  showOnlyTheLastOne: true,
});

const WebStates = (props) => {
  const [webData, setWebData] = useState(false);

  const notifyWarning = (msg) => {
    Notiflix.Notify.warning(msg);
  };

  const errorPopup = (msg) => {
    Notiflix.Report.failure("Error", msg);
  };

  const gData = { notifyWarning, errorPopup };

  const output = { gData, webData, setWebData };

  return (
    <WebContext.Provider value={output}>{props.children}</WebContext.Provider>
  );
};

export { WebStates };

export default WebContext;
