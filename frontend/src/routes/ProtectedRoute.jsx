import React from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "hooks/user.actions";

function ProtectedRoute({ children }) {
    // const { user } = 
    //     JSON.parse(localStorage.getItem("auth"));
    const user = getUser();
    return user? <>{children}</> : <Navigate to="/signin" />;
}

export default ProtectedRoute;