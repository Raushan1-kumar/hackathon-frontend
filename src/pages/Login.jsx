import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios"
import React, { useState } from "react";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
   await axios.post('/user/login',{email, password}).then((res)=>{
       console.log(res.data);
       setLoading(false);
       localStorage.setItem("token",res.data.token);
       localStorage.setItem("user",JSON.stringify(res.data.user))
       navigate('/');
    }).catch(err=>{
      console.log(err);
    })
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen  bg-white dark:bg-gray-900  p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl">
        <div> 
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white font-inter">
            Medical Wallet
          </h1>
          <h2 className="mt-6 text-center text-xl text-gray-600 dark:text-gray-300 font-inter">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm font-inter"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm font-inter"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 font-inter">
          Don't have an account?{" "}
          <Link to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;