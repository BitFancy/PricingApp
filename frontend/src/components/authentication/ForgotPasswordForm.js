import axios from "axios";
import React, { useState } from "react"
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/auth/forgot-password', {email})
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((err) => {
                setMessage(err.res);
            });
    }

  return (
    <form
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
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            </div>
        </div>
        <p>{message}</p>
        <div>
            <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Send Email
            </button>
        </div>
        <div className="text-sm text-center">
            <Link to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">Already have an account? Login!</Link>
        </div>
    </form>
  );
};

export default ForgotPasswordForm;