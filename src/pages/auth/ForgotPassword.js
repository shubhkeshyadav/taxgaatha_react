import ResetPass from "../../components/auth/ResetPass";
import PageHeader from "../../components/layout/PageHeader";

const ForgotPassword = () => {
  return (
    <>
      <PageHeader
        status="completed"
        title="User Reset Password"
        breadcrumb={["Reset Password"]}
      />
      <ResetPass />
    </>
  );
};

export default ForgotPassword;
