import React from 'react';

const Register = () => {

    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className="w-[400px] text-[#d0d2d6] p-4   ">
                <div className='bg-[#283046] p-4 rounded-md'>
                    <h2 className='text-2xl mb-3 font-[500]'>Welcome to e-commerce</h2>
                    <p className='text-sm mb-3'>Please register to your account and start your bussiness</p>
                    <form action="">
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                   className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#161d31] focus:border-indigo-500 overflow-hidden"
                                   placeholder='Name'
                                   id="name"
                                   required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                   className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#161d31] focus:border-indigo-500 overflow-hidden"
                                   placeholder='email'
                                   id="email"
                                   required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="text"
                                   className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#161d31] focus:border-indigo-500 overflow-hidden"
                                   placeholder='password'
                                   id="password"
                                   required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                   className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#161d31] focus:border-indigo-500 overflow-hidden"
                                   placeholder='Name'
                                   id="name"
                                   required
                            />
                        </div>
                        <div className='flex items-center w-full gap-3 mb-3'>
                            <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500'
                                   type="checkbox"
                                   name='checkbox'
                                   id='checkbox'
                                   required />
                            <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                        </div>
                        <button className='bg-blue-500 w-full hover:hover:shadow-blue-500/40 transition-all duration-400 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;