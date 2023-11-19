import axios from "axios";
import { useNavigate } from "react-router-dom";

const useUserActions = () => {
    const navigate = useNavigate();
    const baseURL = "http://localhost:8000/api";
    return {
        signin,
        signup,
        signout,
    };

    async function signin (data){
        const res = await axios.post(`${baseURL}/auth/signin/`, data);
        setUserData(res.data);
        navigate("/main");
    }

    function signout() {
        localStorage.removeItem("auth");
        navigate("/signin");
    }

    async function signup (data){
        const res = await axios.post(`${baseURL}/auth/signup/`, data);
        setUserData(res.data);
        navigate("/main");
    }
}

function getUser() {
    const auth = 
        JSON.parse(localStorage.getItem("auth")) || null;
    if(auth) {
        return auth.user;
    } else {
        return null;
    }
}

function getAccessToken() {
    const auth =
        JSON.parse(localStorage.getItem("auth"));
    return auth.access;
}

function getRefreshToken() {
    const auth =
        JSON.parse(localStorage.getItem("auth"));
    return auth.refresh;

}

function setUserData(data) {
    localStorage.setItem(
        "auth", JSON.stringify({
            access: data.access,
            refresh: data.refresh,
            user: data.user,
        })
    )
}

export { useUserActions, getUser, getAccessToken, getRefreshToken }