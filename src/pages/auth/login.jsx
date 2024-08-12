import React from 'react';
import { useState} from 'react';
import { useDispatch } from "react-redux";
import { Link,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FunctionLogin } from '../../redux/action/admin';
const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }

        setLoading(true);
        try {
            await dispatch(FunctionLogin(email,password));
            toast.success('Đăng nhập thành công');
            navigate('/homepage');
        } catch (error) {
            toast.error('Đăng nhập không đúng');
        } finally {
            setLoading(false);
        }
    }
return(
       <>
       <form onSubmit={handleSubmit}>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sigin your Account</h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Your email</label>
            <input value={email} type='email' onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="name@company.com" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input type="password" id="password" name='password' value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="••••••••" required />
            </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Sign in</button>
        <p className="text-center mt-4">Already have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up here</Link></p>
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
            </form>
    <ToastContainer />
       </>
)
}
export default Login;