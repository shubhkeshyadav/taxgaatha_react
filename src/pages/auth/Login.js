import LoginForm from "../../components/auth/LoginForm";
import PageHeader from "../../components/layout/PageHeader";

const Login = () => {
  return (
    <>
      <PageHeader
        status="completed"
        title="User Login"
        breadcrumb={["User Login"]}
      />
      <LoginForm />;
    </>
  );
};

export default Login;
