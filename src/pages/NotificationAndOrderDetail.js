import React from "react";
import PageHeader from "../components/layout/PageHeader";
import Detail from "../components/notification/Detail";

const NotificationAndOrderDetail = (props) => {
  const { type } = props;
  return (
    <>
      <PageHeader
        status="completed"
        title={`GST ${type}`}
        breadcrumb={["GST " + type]}
      />
      <Detail />;
    </>
  );
};

export default NotificationAndOrderDetail;
