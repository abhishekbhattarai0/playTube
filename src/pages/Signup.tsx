import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { InputFile } from '../components/ui/InputFile'
import Container from '../Container';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthProvider';

interface signupFormValues {
  email: string;
  username: string;
  fullname: string;
  password: string;
  avatar: File;
  coverImage: File;
}



const Signup = () => {
    const {signup} = useContext(AuthContext)
    const navigate = useNavigate()

    const [avatar, setAvatar] = useState()
    const [coverImage, setCoverImage] = useState()
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<signupFormValues>()

    const onAvatarImage = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
    }

    const onCoverImage = (e) => {
        setCoverImage(e.target.files[0])
    }

    

    const onSubmit = async(data:signupFormValues) => {
        console.log(data)
       const response = await signup(data.email,data.username, data.fullname, data.password, avatar, coverImage)
       console.log("reponse", response)

       if(response){
        navigate('/',{replace:true})
       }
       console.log(response)

    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} className='flex w-fullh-screen items-center justify-around mt-10  '>
            <div className='flex flex-col gap-4 md:w-1/3 w-2/3 mb-10 bg-purple-300 px-8 py-8 rounded-xl '>
                <h1 className='text-3xl font-bold flex'>Signup</h1>
                <p className='flex text-gray-800'>Welcome! Please enter your details</p>
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
                    label='Fullname'
                    placeholder='Enter your full name'
                    type='input'
                    {...register("fullname",{
                        required:true,
                        minLength: {
                            value:5,
                            message: "minimum 5 letters required"
                        },
                        maxLength: {
                            value: 20,
                            message: "cannot exceeds 20 character"
                        },
                        pattern: {
                            value: /^[a-zA-Z -']+$/,
                            message: "only alphabets allowed"
                        }
                    })}
                />
                {errors.fullname && (<span className='text-red-600'>{errors.fullname.message}</span>)}

                <Input 
                    label='Username'
                    placeholder='Username'
                    {...register("username", {
                        required:true,
                        minLength: {
                            value:5,
                            message: "minimum 5 letters required"
                        },
                        maxLength: {
                            value: 20,
                            message: "cannot exceeds 20 character"
                        },
                    })}
                />
                {errors.username && (<span className='text-red-600'>{errors.fullname?.message}</span>)}

                <InputFile
                    label='Avatar'
                    onChange={onAvatarImage} 
                />

                <InputFile

                    label='CoverImage'
                    onChange={onCoverImage}
                />

                <Input
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
                

                <Button type='submit' className='bg-purple-700 hover:bg-purple-600'>Sign up</Button>
                <p className='text-md text-gray-800'>Already have an account? <Link to={'/login'}><span className='text-lg font-semibold text-purple-800'>Sign in</span></Link></p>
            </div>
        </form>
        </Container>
    )
}

export default Signup