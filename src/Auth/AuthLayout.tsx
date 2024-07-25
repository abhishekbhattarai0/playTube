import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    const { auth, setAuth } = useContext(AuthContext);
    const [loader, setLoader] = useState(true)
    const isAuthenticated= auth.authStatus;
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect")
        console.log(isAuthenticated)
            if (isAuthenticated === true) {
                navigate("/",{replace:true});
            } else if(isAuthenticated === false) {

                
                navigate("/login",{replace:true});
            }

            setLoader(false)
    }, [auth,isAuthenticated, navigate]);

    return isAuthenticated?<>{children}</>: null;
};

export default AuthLayout;
