import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import Filters from "../components/Filters/Filters";
import { useEffect } from "react";
import Listing from "../components/act-rules/Listing";

const ActAndRule = () => {
  const param = useParams();
  const type = param.type;
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!["acts", "rules"].includes(type)) {
      navigate("/gst/acts");
    }
  }, []);

  const filterHandler = (data) => {
    setSearchParams(data);
  };

  return (
    <>
      <Filters filterHandler={filterHandler} type={type} />
      <Listing type={type} />
    </>
  );
};

export default ActAndRule;
