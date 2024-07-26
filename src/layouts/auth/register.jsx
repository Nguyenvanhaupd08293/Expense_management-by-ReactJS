import React from 'react';
import { Link } from 'react-router-dom';
const Register =()=>{
return(
       <>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create your an account</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Your email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" placeholder="name@company.com" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Your username</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Your username" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg" placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Create an account</button>
        </form>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in here</Link></p>
        <div class="mt-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div class="mt-6 grid grid-cols-3 gap-3">
                    <div>
                        <Link to=""
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to=""
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to=""
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
    </div>
       </>
)
}
export default Register;