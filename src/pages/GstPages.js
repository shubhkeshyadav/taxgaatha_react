import ActAndRule from "./ActAndRule";
import Notifications from "./Notifications";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Law from "./Law";

const GstPages = () => {
  let content;
  const param = useParams();
  const location = useLocation();
  const type = param.type;
  const navigate = useNavigate();

  if (type === "acts" || type === "rules") {
    content = <ActAndRule />;
  } else if (type === "notifications" || type === "orders") {
    content = <Notifications />;
  } else if (type === "law") {
    content = <Law />;
  }

  useEffect(() => {
    if (!content) {
      navigate("/404");
    }
  }, [location]);

  return <>{content}</>;
};

export default GstPages;
