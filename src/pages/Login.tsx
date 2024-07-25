import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import Container from '../Container'

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormValues>()
    
    const {auth, setAuth} = useContext(AuthContext)

    const {login } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [isBoxChecked, setIsBoxChecked] = useState(false)
    const [error, SetError] = useState("")
    const navigate = useNavigate()

    useEffect(()=> {
        if(localStorage.getItem("userData")){
            let data = localStorage.getItem("userData")
            data = JSON.parse(data)
            const accessToken = data?.accessToken;
            const user = data?.user
            setAuth({...auth,accessToken:accessToken,user:user,authStatus:true})
            if(accessToken && user){
                navigate('/', {replace:true})
            }
            }
    },[])
   

    const onSubmit = async (data:LoginFormValues) => {
        try {
            if(!isBoxChecked) { SetError("You must agree with Terms and conditions") ; return;}
            setIsLoading(true)
            const userData = await login(data.email, data.password);
            if (userData) {
                navigate('/', { replace: true })
                localStorage.setItem("userData", JSON.stringify(userData));
            }

        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }

    }


    
    
    return (
        <Container>
        <form onSubmit={handleSubmit(onSubmit)} className='flex h-screen w-full items-center justify-center '>
            <div className='flex flex-col gap-4 md:w-1/3 w-2/3 mb-10 bg-purple-300 px-8 py-8 rounded-xl '>
                <h1 className='text-3xl font-bold flex'>Login</h1>
                <p className='flex text-gray-800'>Welcome back! Please enter your details</p>
                <Input
                    label='Email'
                    placeholder='Enter your email'
                    type='input'
                    {...register("email", {
                        required: true,
                        minLength:{
                            value: 6,
                            message: "minimum email lenght is 6"
                        },
                        max: 12,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                          }
                    })}
                />
                {errors.email && (<span className='text-red-600'>{errors.email.message}</span>)}
                <Input
                    value="Password@1"
                    label='Password'
                    placeholder='Password'
                    type='password'
                    {...register("password", {
                        required: true,
                        minLength:{
                            value: 6,
                            message: "minimum password lenght is 8 "
                        },
                        max: 12,
                        pattern: {
                            // eslint-disable-next-line no-useless-escape
                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\\|,.<>/?]).{8,}$/,
                            message: "must include special character and uppercase letter",
                          }
                    })}
                />
                {errors.password && (<span className='text-red-600'>{errors.password.message}</span>)}
                <div className='flex flex-row text-xs justify-between'>
                    <div className="flex items-center space-x-2">
                        <Checkbox checked={isBoxChecked} onClick={()=> setIsBoxChecked(prev => !prev)} id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <span className='text-sm font-semibold text-purple-800'>Forget password</span>
                </div>
                <div>{error && <div className='text-red-600'>{error}</div> }</div>

                <Button type='submit' className='bg-purple-700 hover:bg-purple-600'>{isLoading? "Loading..." : "Sign in"}</Button>
                <p className='text-md text-gray-800'>Don't have an account? <Link to={'/signup'}><span className='text-lg font-semibold text-purple-800'>Sign in</span></Link></p>
            </div>
        </form>
        </Container>
    )
}

export default Login