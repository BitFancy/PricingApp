import React from "react"
import ForgotPasswordForm from "../../components/authentication/ForgotPasswordForm";
import Logo from "../../assets/img/logo.png"

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="mx-auto my-auto justify-center w-2/3">
            <div className="flex">
                <div
                className="flex items-center w-5/12 lg:rounded-l-lg"
                style={{
                    background:
                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                }}
                >
                <div className="px-10 py-4 rounded bg-white mx-auto">
                    <img
                        className="mx-auto"
                        src={Logo}
                        alt="Workflow"
                    />
                </div>
                </div>
                <div className="min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-7/12">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src={Logo}
                            alt="Workflow"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Forgot Your Password?
                        </h2>
                        <p className="mt-5 text-center text-sm leading-9 tracking-tight text-gray-900">
                            We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                        </p>
                    </div>
                    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                        <ForgotPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ForgotPassword;