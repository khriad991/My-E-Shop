import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineGithub, AiOutlineGooglePlus} from "react-icons/ai";
import {FiFacebook} from "react-icons/fi";
import {CiTwitter} from "react-icons/ci";

const Register = () => {

    const [state ,setState] = useState({
        name:"",
        email:"",
        password:""
    })
    const inputHandle = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const submit = (e)=>{
        e.preventDefault();
        console.log(state)
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className="w-[400px] text-[#d0d2d6] p-5   ">
                <div className='bg-[#283046] p-4 rounded-md'>
                    <h2 className='text-2xl mb-3 font-[500]'>Welcome to e-commerce</h2>
                    <p className='text-sm mb-3'>Please register to Here & start your business</p>
                    <form action="" onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="name">Name</label>
                            <input onChange={inputHandle}
                                   value={state.name}
                                   className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                   type="text"
                                   name='name'
                                   placeholder='name'
                                   id='name'
                                   required
                            />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle}
                                   value={state.email}
                                   className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                   type="email"
                                   name='email'
                                   placeholder='
                                   email'
                                   id='email'
                                   required
                            />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input onChange={inputHandle}
                                   value={state.password}
                                   className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                   type="password"
                                   name='password'
                                   placeholder='password'
                                   id='password'
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
                        <button className='bg-blue-500 w-full hover:hover:shadow-blue-500/40 transition-all duration-400 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sing Up </button>
                        <div className="flex items-center mb-4 gap-3">
                            <p>Already have account ? <Link className='text-blue-400' to='/login'>Singin Here</Link> </p>
                        </div>
                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                <span><AiOutlineGooglePlus/></span>
                            </div>
                            <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                                <span><FiFacebook/></span>
                            </div>
                            <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-cyan-700/50 justify-center cursor-pointer items-center overflow-hidden font-bold ">
                                <span><CiTwitter/></span>
                            </div>
                            <div className="w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center cursor-pointer items-center overflow-hidden ">
                                <span><AiOutlineGithub/></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;