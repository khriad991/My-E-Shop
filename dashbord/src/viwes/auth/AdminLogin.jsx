import React, {useState} from 'react';
import {admin_login} from "../../store/Reducerers/authReducers";
import {useDispatch} from "react-redux";
const AdminLogin = () => {
    const dispatch = useDispatch();

    const [state,setState] = useState({
        email:"",
        password:"",
    })
    const inputHandle = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e)=>{
        e.preventDefault();
        dispatch(admin_login(state))
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className="w-[400px] text-[#d0d2d6] p-4   ">
                <div className='bg-[#283046] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[60px] '>
                            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="logo"/>
                        </div>
                    </div>
                    <form action="" onSubmit={submit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input onChange={inputHandle}
                                   value={state.email}
                                   className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                                   type="text"
                                   name='email'
                                   placeholder='email'
                                   id='email'
                                   required
                            />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
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

                        <button className='bg-blue-500 w-full hover:hover:shadow-blue-500/40 transition-all duration-400 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Log In</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;