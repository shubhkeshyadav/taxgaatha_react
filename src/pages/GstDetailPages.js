import ActAndRule from "./ActAndRule";
import Notifications from "./Notifications";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ActAndRuleDetail from "./ActAndRuleDetail";
import NotificationAndOrderDetail from "./NotificationAndOrderDetail";
import LawDetail from "./../components/Law/LawDetail";
import GstFormDetail from "./GstFormDetail";

const GstDetailPages = () => {
  const param = useParams();
  const location = useLocation();
  const type = param.type;
  const navigate = useNavigate();
  let content;

  if (type === "notifications" || type === "orders") {
    content = <NotificationAndOrderDetail type={type} />;
  } else if (type === "acts" || type === "rules") {
    content = <ActAndRuleDetail type={type} />;
  } else if (type === "law") {
    content = <LawDetail />;
  } else if (type === "forms") {
    content = <GstFormDetail />;
  }

  console.log(type);

  useEffect(() => {
    if (!content) {
      navigate("/404");
    }
  }, [location]);

  return <>{content}</>;
};

export default GstDetailPages;
