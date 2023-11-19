import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignInForm = () => {
    const [validated, setValidated] = useState("false");
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const userActions = useUserActions();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const signinForm = event.currentTarget;
        if(signinForm.checkValidity() === false){
            event.stopPropagation();
        }
        
        setValidated("true");
        const data = {
            email: form.email,
            password: form.password,
        };
        
        userActions.signin(data)
            .then(() => {
                toast('Successfully Signed!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true, 
                    progress: undefined,
                });
                console.log("hello success");
            })
            .catch((err) => {
                console.log("this is error" , err);
                if(err.message){
                    setError(err.response);
                }
            });
    }

  return (
    <>
    <ToastContainer />
    
    <form
        className="space-y-6"
        onSubmit={handleSubmit}
        validated = {validated}
        method="POST"
    >
        
        <div>
            <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
            >
            Email address
            </label>
            <div className="mt-2">
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <div className="mt-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    minLength="8"
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="flex items-center justify-center mt-5">
                <div className="text-sm">
                    <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot Password</Link>
                </div>
            </div>
        </div>

        <div>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
            </button>
        </div>
    </form>
    </>
  );
};

export default SignInForm;