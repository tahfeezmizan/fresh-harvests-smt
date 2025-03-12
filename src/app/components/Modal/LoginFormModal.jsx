import { useLoginMutation, useRegisterMutation } from '@/app/redux/api/auth/authApi';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function LoginFormModal({ title }) {
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const { register: registerLogin, handleSubmit: handleLoginSubmit, formState: { errors: loginErrors } } = useForm();
    const { register: registerRegister, handleSubmit: handleRegisterSubmit, formState: { errors: registerErrors } } = useForm();

    const [login, { isLoading, error }] = useLoginMutation();
    const [register, { isLoading: registerLoading, registerError }] = useRegisterMutation();

    const onLoginSubmit = async (data) => {
        try {
            console.log("Login Data:", data);
            const response = await login(data).unwrap();
            console.log("Login Success:", response);
            alert("Login Successful!");
        } catch (error) {
            console.log("Login Error:", error);
        }
    };

    const onRegisterSubmit = async (data) => {
        try {
            console.log("Register Data:", data);
            const response = await register(data).unwrap();
            console.log("Register Success:", response);
            alert("Register Successful!");
        } catch (error) {
            console.log("Register Error:", error);
        }
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
                                {...registerLogin('password', { 
                                    required: 'Password is required', 
                                    minLength: { value: 8, message: 'Password must be at least 8 characters long' }
                                })}
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
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                {...registerRegister('fullName', { required: 'Full Name is required' })}
                                className="w-full px-4 py-2 border border-[#D9D9D9] outline-none rounded"
                                placeholder="Enter your full name"
                            />
                            {registerErrors.fullName && <p className="text-red-500 text-xs mt-1">{registerErrors.fullName.message}</p>}
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
                                {...registerRegister('password', { 
                                    required: 'Password is required', 
                                    minLength: { value: 8, message: 'Password must be at least 8 characters long' }
                                })}
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
