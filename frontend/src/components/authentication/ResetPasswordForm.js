import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useUserActions } from "../../hooks/user.actions";

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState("false");
    const userActions = useUserActions();
    const [passwords, setPasswords] = useState({ password: '', confirm_password: ''});
    const [message, setMessage] = useState('');
    const baseURL = "http://localhost:8000/api";

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${baseURL}/auth/forgot-password/`, passwords)
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((err) => {
                setMessage(err.response.data.password[0]);
            });
    }

  return (
    <form
        className="space-y-6"
        onSubmit={handleSubmit}
        validated = {validated}
        method="POST"
    >
        <div>
            <div className="mt-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    New Password
                </label>
                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    minLength="8"
                    value={passwords.password}
                    onChange={(e) => setPasswords({...passwords, password: e.target.value})}
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
                    Confirm Password
                </label>
                <input
                    id="confirm-password"
                    type="password"
                    autoComplete="current-password"
                    minLength="8"
                    value={passwords.confirm_password}
                    onChange={(e) => setPasswords({...passwords, confirm_password: e.target.value})}
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
                Reset Password
            </button>
        </div>
    </form>
  );
};

export default ResetPasswordForm;