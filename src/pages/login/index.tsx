import { useState } from "react";
import Layout from "@/components/ui/layout";
import LoginForm from "@/components/ui/loginForm";
import RegisterForm from "@/components/ui/registerForm";

const Login = () => {
  const [formType, setFormType] = useState("register");

  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };
  return (
    <Layout title="Login Page">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 shadow p-4">
            {formType === "login" ? (
              <>
                <h1 className="mb-4">Login</h1>
                <LoginForm />
                <p>
                  Don&apos;t have account?{" "}
                  <a
                    className="text-primary"
                    role="button"
                    onClick={toggleFormType}
                  >
                    Sign Up
                  </a>
                </p>
              </>
            ) : (
              <>
                <h1 className="mb-4">Register</h1>
                <RegisterForm />
                <p>
                  Already have account?{" "}
                  <a
                    className="text-primary"
                    role="button"
                    onClick={toggleFormType}
                  >
                    Sign In
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
