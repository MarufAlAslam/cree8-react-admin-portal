import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <form>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm mb-3' htmlFor='email'>
                        E-mail
                    </label>
                    <input
                        className='appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3'
                        id='email'
                        type='text'
                        placeholder='mail@mail.com'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm mb-3' htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm py-3'
                        id='password'
                        type='text'
                        placeholder='Password'
                    />
                </div>

                <div className='flex items-center justify-between mb-4'>
                    <div className='flex justify-start items-center'>
                        <input type='checkbox' id='rem' className='mr-2' />
                        <label htmlFor='rem' className='text-sm'>Remember me</label>
                    </div>
                    <a className='inline-block align-baseline text-sm text-blue-500 hover:text-blue-800' href='#'>
                        Forgot Password?
                    </a>
                </div>


                <div className='flex items-center justify-between'>
                    <button
                        className='btn-blue w-full mt-5 py-3 hover:bg-blue-700 text-white px-4 rounded focus:outline-none focus:shadow-outline'
                        type='button'
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm