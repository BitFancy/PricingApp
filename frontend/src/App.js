import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import AppRouter from 'routes/routers';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/tailwind.css';
import ProtectedRoute from 'routes/ProtectedRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from 'pages/authentication/Signin';
import Cockpit from 'pages/Cockpit';
import Layout from 'components/Layout/Layout';
import Pricing from 'pages/Pricing';
import Promotions from 'pages/Promotions';
import Optimizer from 'pages/Optimizer';
import Configurations from 'pages/Configurations';
import MainPageLayout from 'components/Layout/MainPageLayout';
import SignUp from 'pages/authentication/Signup';
import ForgotPassword from 'pages/authentication/ForgotPassword';
import ResetPassword from 'pages/authentication/ResetPassword';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index='signin' element={<SignIn />} />
                        <Route path='signin' element={<SignIn />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route path='forgot-password' element={<ForgotPassword />} />
                        <Route path='reset-password' element={<ResetPassword />} />
                        {/* <Route path="/reset-password/:uidb64/:token" render={(props) => <ResetPassword uidb64={props.match.params.uidb64} token={props.match.params.token} />} /> */}
                        <Route path="/reset-password/:uidb64/:token" element={props => <ResetPassword uidb64={props.match.params.uidb64} token={props.match.params.token} />} />
                        <Route path='main' element={<MainPageLayout />} >
                            <Route index='cockpit' element={<Cockpit />} />
                            <Route path='cockpit' element={<Cockpit />} />
                            <Route path='pricing' element={<Pricing />} />
                            <Route path='promotions' element={<Promotions />} />
                            <Route path='optimizer' element={<Optimizer />} />
                            <Route path='configurations' element={<Configurations />} />
                        </Route>
                    </Route>
                </Routes>

{/* 
                <ProtectedRoute>
                    <Sidebar />
                </ProtectedRoute>
                
                <div className={`${user? "md:ml-64" :''}`}>
                    <AppRouter />
                    <ProtectedRoute>
                        <Footer />
                    </ProtectedRoute>
                </div> */}
            </BrowserRouter>
        </>
    );
}

export default App;
