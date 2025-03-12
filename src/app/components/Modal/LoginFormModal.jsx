"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export default function LoginFormModal({ title }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg  text-black">
            <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4 relative">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        {...register('password', { required: 'Password is required' })}
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
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                    <a href="#" className="text-sm text-[#4A4A52]">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg">Login</button>
            </form>
            <div className="text-center my-4 text-sm">Or Sign in with</div>
            <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#D9D9D9] outline-none rounded">
                    <FcGoogle /> Google
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#D9D9D9] outline-none rounded">
                    <FaFacebook /> Facebook
                </button>
            </div>
            <p className="text-center text-sm font-semibold mt-4">Don’t have an account?
                <a href="#" className="text-[#FF6A1A]">Sign up</a>
            </p>
        </div>
    );
};
