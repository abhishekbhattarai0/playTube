import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { InputFile } from '../components/ui/InputFile'

interface signupFormValues {
  email: string;
  username: string;
  fullname: string;
  password: string;
  avatar: File;
  coverimage: File;
}

const Signup = () => {
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<signupFormValues>()

    const onSubmit = (data:signupFormValues) => {
        console.log("hello")
        console.log(data, register)
    }
    return (
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
                    {...register("avatar", { required: true })} 
                />

                <InputFile

                    label='CoverImage'
                    {...register("coverimage", { required: true })} 
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
                <p className='text-md text-gray-800'>Already have an account? <span className='text-lg font-semibold text-purple-800'>Sign in</span></p>
            </div>
        </form>
    )
}

export default Signup