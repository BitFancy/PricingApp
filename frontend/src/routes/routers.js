import { Router, Route, Navigate, Routes} from "react-router-dom";
import ForgotPassword from "../pages/authentication/ForgotPassword";
import ResetPassword from "../pages/authentication/ResetPassword";
import SignIn from "../pages/authentication/Signin";
import SignUp from "../pages/authentication/Signup";
import Cockpit from "../pages/Cockpit";
import ProtectedRoute from "./ProtectedRoute";
import Pricing from "../pages/Pricing";
import Configurations from "pages/Configurations";
import Promotions from "../pages/Promotions";
import Optimizer from "../pages/Optimizer";
import Layout from '../components/Layout/Layout'

const AppRouter = () => {
    return (
        <>
            {/* <Router> */}
                <Routes>
                    <Route path="/" element={<Layout />}>

                        <Route index path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="cockpit" element={<ProtectedRoute><Cockpit /></ProtectedRoute>} />
                        <Route path="/pricing" element={props => <ProtectedRoute><Pricing {...props} /></ProtectedRoute>} />
                        <Route path="/promotions" element={props =><ProtectedRoute><Promotions {...props} /></ProtectedRoute>} />
                        <Route path="/optimizer" element={props =><ProtectedRoute><Optimizer {...props} /></ProtectedRoute>} />
                        <Route path="/configurtions" element={props =><ProtectedRoute><Configurations {...props} /></ProtectedRoute>} />
                        <Route path="/forgotpassword" element={props =><ForgotPassword {...props} />} />
                        <Route path="/forgotpassword/:token" element={props =><ResetPassword {...props} />} />
                    </Route>
                    {/* <Route path="/" element={<Navigate to='/cockpit'/>} /> */}
                </Routes>
            {/* </Router> */}
        </>
    )
}

export default AppRouter;