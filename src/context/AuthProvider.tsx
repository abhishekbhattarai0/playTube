import { createContext, useEffect, useState } from "react"
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
      accessToken:'',
      user:{},
      authStatus:false

    })
    const login = async(email:string, password:string) => {
      try {
        console.log("Trying...")
        const response = await axios.post('/api/v1/users/login', {
          email,
          password
        })
        console.log(response)
        const accessToken = response.data?.data?.accessToken;
        const user = response.data?.data?.user
        const userData = response?.data?.data
        
        if(accessToken){
        setAuth({...auth,accessToken:accessToken,user:user,authStatus:true})
        }

        return userData
        
      } catch (error) {
        console.log(error)
      }
      
    }
    // useEffect(() => {
    //   setAuth((prevAuth) => ({ ...prevAuth, login }));
    // }, []);
  return (
    <AuthContext.Provider value={{auth, setAuth, login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext