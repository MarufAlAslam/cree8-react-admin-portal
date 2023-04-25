import React from 'react'
import loginImg from '../../../assets/images/Login/login-img.png'
import logo from '../../../assets/images/Login/logo.png'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className='login min-h-screen p-40 px-96'>
            <div className='login__container lg:flex w-full'>
                <div className='login__container__left flex flex-col bg-[#0F4C7D] w-full justify-end items-center lg:w-1/2'>
                    <div className='text-center'>
                        <h2 className='text-white fs-21 mt-auto font-medium'>
                            Building your dreams, one brick at a time
                        </h2>

                        <p className='fs-13 text-white mt-2'>
                            With 20 years of experience in the industry, <br />
                            We have built a solid reputation for delivering high-quality projects on time.
                        </p>
                    </div>
                    <img src={loginImg} className='block mx-auto' alt='' />
                </div>

                <div className='login__container__right lg:w-1/2 bg-white p-10 flex flex-col justify-center items-center w-full'>
                    <div className='w-full'>
                        <img src={logo} alt='' className='block mx-auto mb-6' />

                        <div className='text-center mb-6'>
                            <h2 className='fs-21 font-medium mb-3'>
                                Welcome to AM8 Office
                            </h2>
                            <p className='fs-13 text-gray-600'>
                                Please enter your credentials to access your account.
                            </p>
                        </div>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login