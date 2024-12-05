import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  


  return (
   <div className='flex justify-center items-center'>
     <div className="w-full max-w-sm md:max-w-lg mx-auto mt-20 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Please Login Now!</h2>

      <form className="space-y-4">
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-3 p-3 border border-gray-300 rounded-md w-full"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-3 p-3 border border-gray-300 rounded-md w-full"
            placeholder="Enter your password"
          />
        </div>

        {/* Forget Password Link */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-blue-500 cursor-pointer hover:underline">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-4 bg-gray-700 text-red-500 text-xl font-semibold rounded-md mt-4"
        >
          Login
        </button>
      </form>
    </div>
   </div>
  );
};

export default Login;
