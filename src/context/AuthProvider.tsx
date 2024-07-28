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
        const response = await axios.post('/api/v1/users/login', {
          email,
          password
        })
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

    const signup = async(email:string,username:string, fullName:string, password:string, avatar:File, coverImage: File) => {
      try {
        const formData = new FormData()

        formData.append('username', username)
        formData.append('email', email)
        formData.append('fullname', fullName)
        formData.append('password', password)
        formData.append('avatar', avatar)
        formData.append('coverImage', coverImage)
        

        const response = await axios.post(
          '/api/v1/users/register',
          formData,
          {headers: {
            'Content-Type': 'multipart/form-data'
          }}
        )
        console.log(response)
        const user = response.data?.data
        
        if(!user){
          console.log("user not found")
        }
        setAuth({...auth,user:user,authStatus:true})

        return user

      } catch (error) {
        console.log(error)
      }
    }
    // useEffect(() => {
    //   setAuth((prevAuth) => ({ ...prevAuth, login }));
    // }, []);
  return (
    <AuthContext.Provider value={{auth, setAuth, login, signup}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext