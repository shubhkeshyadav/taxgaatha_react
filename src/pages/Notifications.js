import { useEffect } from "react";
import Filters from "../components/Filters/Filters";
import Listing from "../components/notification/Listing";
import { useParams, useNavigate } from "react-router-dom";

const Notifications = () => {
  const param = useParams();
  const type = param.type;
  const navigate = useNavigate();

  useEffect(() => {
    if (!["notifications", "orders"].includes(type)) {
      navigate("/gst/notifications");
    }
  }, []);
  return (
    <>
      <Filters />
      <Listing type={type} />
    </>
  );
};

export default Notifications;
