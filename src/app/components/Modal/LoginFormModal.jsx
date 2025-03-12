"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export default function LoginFormModal({ title }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm();
    const { register: registerRegister, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors } } = useForm();

    const onLoginSubmit = (data) => {
        console.log("Login Data:", data);
    };

    const onRegisterSubmit = (data) => {
        console.log("Register Data:", data);
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-10 py-12 rounded-lg text-black border border-[#D9D9D9]">
            {isLogin ? (
                <div className="LoginForm">
                    <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                    <form onSubmit={handleLoginSubmit(onLoginSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                {...registerLogin('email', { required: 'Email is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your email"
                            />
                            {loginErrors.email && <p className="text-red-500 text-xs mt-1">{loginErrors.email.message}</p>}
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...registerLogin('password', { required: 'Password is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-10"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOutline className="h-5 w-5" /> : <IoEyeOffOutline className="h-5 w-5" />}
                            </button>
                            {loginErrors.password && <p className="text-red-500 text-xs mt-1">{loginErrors.password.message}</p>}
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg">Login</button>
                    </form>
                    <p className="text-center text-sm font-semibold mt-4">Don’t have an account? 
                        <button onClick={() => setIsLogin(false)} className="text-[#FF6A1A]"> Sign up</button>
                    </p>
                </div>
            ) : (
                <div className="LoginForm">
                    <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
                    <form onSubmit={handleRegisterSubmit(onRegisterSubmit)}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                {...registerRegister('name', { required: 'Name is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your name"
                            />
                            {registerErrors.name && <p className="text-red-500 text-xs mt-1">{registerErrors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                {...registerRegister('email', { required: 'Email is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your email"
                            />
                            {registerErrors.email && <p className="text-red-500 text-xs mt-1">{registerErrors.email.message}</p>}
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                {...registerRegister('password', { required: 'Password is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-10"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOutline className="h-5 w-5" /> : <IoEyeOffOutline className="h-5 w-5" />}
                            </button>
                            {registerErrors.password && <p className="text-red-500 text-xs mt-1">{registerErrors.password.message}</p>}
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg">Register</button>
                    </form>
                    <p className="text-center text-sm font-semibold mt-4">Already have an account? 
                        <button onClick={() => setIsLogin(true)} className="text-[#FF6A1A]"> Log In</button>
                    </p>
                </div>
            )}
        </div>
    );
}