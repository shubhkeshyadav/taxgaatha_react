import { useParams, useNavigate } from "react-router-dom";
import Filters from "../components/Filters/Filters";
import { useEffect } from "react";
import Listing from "../components/act-rules/Listing";

const ActAndRule = () => {
  const param = useParams();
  const type = param.type;
  const navigate = useNavigate();

  useEffect(() => {
    if (!["acts", "rules"].includes(type)) {
      navigate("/gst/acts");
    }
  }, []);

  return (
    <>
      <Filters type={type} />
      <Listing type={type} />
    </>
  );
};

export default ActAndRule;
