import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddAccount } from '../../redux/action/admin';
import { toast, ToastContainer } from 'react-toastify';
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }

        setLoading(true);
        const userObj = { username, email, password };
        try {
            await dispatch(FunctionAddAccount(userObj));
            toast.success('Tạo tài khoản thành công');
            navigate('/homepage');
        } catch (error) {
            toast.error('Đăng ký thất bại');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-6 text-center">Tạo tài khoản</h2>
                        
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">Email của bạn</label>
                            <input value={email} type='email' onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="name@company.com" required />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Tên đăng nhập</label>
                            <input type="text" id="username" name='username' value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="Tên đăng nhập của bạn" required />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" name='password' value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="••••••••" required />
                        </div>
                        
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg" disabled={loading}>
                            {loading ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
                        </button>
                        
                        <p className="text-center mt-4">Đã có tài khoản? <Link to="/" className="text-blue-600 hover:underline">Đăng nhập tại đây</Link></p>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
}

export default Register;
