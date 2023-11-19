import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";
import { ToastContainer, toast } from "react-toastify";

const SignUpForm = () => {
    const [validated, setValidated] = useState("false");
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const userActions = useUserActions();
    const [passwordError, setPasswordError] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const signupform = event.currentTarget;
        if(signupform.checkValidity() === false){
            event.stopPropagation();
        }
        if(form.password === form.confirm_password){
            setValidated('true');
            const data = {
                email: form.email,
                password: form.password,
                company: form.company,
                role: form.role,
            };
            userActions.signup(data)
                .then(() => {
                    toast.success('Successfully Registered!', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined,
                    });
                    alert('success');
                })
                .catch((err) => {
                        alert('failure');
                    if(err.message){
                        setError(err.response);
                    }
                })
            setPasswordError(null);
        } else {
            setPasswordError("Passwords do not match");
        }
       

    };
  return (
<div>
    <ToastContainer />

    <form
        noValidate
        validated={validated}
        className="space-y-6"
        onSubmit={handleSubmit}
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
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    autoComplete="email"
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
                    name="password"
                    type="password"
                    value={form.password}
                    minLength="8"
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    autoComplete="current-password"
                    required
                    className="block w-full text-md rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                />
            </div>
        </div>

        <div>
            <div className="mt-2">
            <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Confirm Password
            </label>
            <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                value={form.confirm_password}
                onChange={(e) => setForm({...form, confirm_password: e.target.value})}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
            />
            </div>
        </div>
        {passwordError && <p className=" text-red-600 text-sm">{passwordError}</p>}
        <div>
            <div className="mt-2">
            <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Company
            </label>
            <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={(e) => setForm({...form, company: e.target.value})}
                autoComplete="Company"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
        </div>

        <div>
            <div className="mt-2">
                <label
                    htmlFor="role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Role
                </label>
                <input
                    id="role"
                    name="role"
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({...form, role: e.target.value})}
                    autoComplete="role"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="flex items-center justify-center mt-5">
            </div>
        </div>

        <div>
            <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Sign Up
            </button>
        </div>
        <div className="text-sm text-center">
        Already have an account? <Link to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">SignIn!</Link>
        </div>
    </form>
    </div>
  );
};

export default SignUpForm;