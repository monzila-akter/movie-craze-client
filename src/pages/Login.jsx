import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginUser, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  // Handle form submission for email/password login
  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        navigate(location?.state? location.state : "/")  // Redirect to home or dashboard
        Swal.fire({
          title: 'Success!',
          text: 'Logged In Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch(err => {
        if (err.code === 'auth/user-not-found') {
          toast.error('No user found with this email');
        } else if (err.code === 'auth/wrong-password') {
          toast.error('Incorrect password');
        } else {
          toast.error(err.message);  // General error
        }
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        navigate(location?.state? location.state : "/")  // Redirect to home or dashboard
        Swal.fire({
          title: 'Success!',
          text: 'Logged In Successfully with Google',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch(err => {
        toast.error("Google login failed: " + err.message);
      });
  };

  return (
    <div className='px-5 flex justify-center items-center'>
      <div className="w-full max-w-sm md:max-w-lg mx-auto mt-14 p-6 bg-white shadow-lg rounded-lg border-2">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Please Login Now!</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { 
                required: "Email is required", 
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
              })}
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message || "Invalid email"}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              className="mt-2 p-3 border border-gray-300 rounded-md w-full"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-blue-500 cursor-pointer hover:underline">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-700 text-xl font-semibold rounded-md text-white mt-4"
          >
            Login
          </button>

          <p className='font-medium text-gray-500'>
            Don't have an account? Please <Link to="/register" className='text-lg text-red-500'>Register</Link>
          </p>
        </form>

        <div className="divider py-4">OR</div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="w-full btn py-3 bg-transparent text-xl font-semibold rounded-md text-gray-700  border-2 border-gray-700"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
