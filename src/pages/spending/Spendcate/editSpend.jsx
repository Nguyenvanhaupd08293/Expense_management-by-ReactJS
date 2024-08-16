import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { FetchTypeSpendList} from '../../../redux/action/categorySpend';
import { FetchSpendObj, FunctionUpdateSpend } from '../../../redux/action/Spending';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ListPaymentmethod } from '../../../redux/action/payment_method';
const EditSpend = (props) => {  // Thêm props vào đây
// Khai báo các state để lưu trữ dữ liệu của form
const [selected, setSelected] = useState(null); // Lưu giá trị được chọn
const [amount, setamount] = useState(''); // Lưu số tiền
const [date, setDate] = useState(''); // Lưu ngày
const [paymentMethod, setPaymentMethod] = useState(''); // Lưu phương thức thanh toán

const { id } = useParams(); // Lấy tham số id từ URL
const userobj = useSelector((state) => state.spend.spendobj); // Lấy dữ liệu chi tiêu từ Redux store

// Hàm xử lý sự kiện khi chọn một giá trị
const handleSelect = (id) => {
    setSelected(id); // Cập nhật state với giá trị đã chọn
};

const dispatch = useDispatch(); // Hàm dispatch để gửi action đến Redux store
const navigate = useNavigate(); // Hàm để điều hướng người dùng đến trang khác

// Hàm xử lý sự kiện khi gửi form
const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

    // Kiểm tra nếu các trường bắt buộc không được điền
    if (!selected || !amount || !date) {
        toast.error('Vui lòng điền đầy đủ thông tin'); // Hiển thị thông báo lỗi
        return;
    }

    // Tạo đối tượng dữ liệu từ các state
    const userObj = { id, selected, amount, date, paymentMethod };
    
    // Gửi action cập nhật chi tiêu đến Redux store
    dispatch(FunctionUpdateSpend(userObj, id));

    setTimeout(() => {
        navigate('/listspend');
    }, 1000);
};

// Hook useEffect để lấy dữ liệu chi tiêu khi component được mount
useEffect(() => {
    dispatch(FetchSpendObj(id)); // Gửi action để lấy dữ liệu chi tiêu theo id từ Redux store
    props.loadSpendList();  // Sử dụng props để tải danh sách chi tiêu
    props.loadPaymentMethods();  // Sử dụng props để tải các phương thức thanh toán
}, []); // Chạy một lần khi component được mount

// Hook useEffect để cập nhật state khi dữ liệu chi tiêu thay đổi
useEffect(() => {
    if (userobj) {
        setSelected(userobj.selected); // Cập nhật state với giá trị đã chọn từ dữ liệu chi tiêu
        setamount(userobj.amount); // Cập nhật state với số tiền từ dữ liệu chi tiêu
        setDate(userobj.date); // Cập nhật state với ngày từ dữ liệu chi tiêu
        setPaymentMethod(userobj.paymentMethod); // Cập nhật state với phương thức thanh toán từ dữ liệu chi tiêu
    }
}, [userobj]); // Chạy mỗi khi userobj thay đổi


  return (
    <>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {props.categorySpend.typespendlist && props.categorySpend.typespendlist.map(item => (
          <div
            key={item.id_categorySpend}
            className={`flex flex-col items-center border-2 rounded-md cursor-pointer bg-white transition-all ease-linear p-2 gap-1 ${selected === item.id_categorySpend ? 'border-primary' : 'border-borderColor hover:border-primary'}`}
            onClick={() => handleSelect(item.id_categorySpend)}
          >
           <img
  src={`/${item.icon_spend}`}
  alt={`icon ${item.category_name}`}
  className="w-16 h-16"
/>

            <span className="uppercase">{item.category_name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-4">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Giá chi
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white"
                id="grid-first-name"
                type="number"
                placeholder="amount"
                value={amount || ''}
                onChange={(e) => setamount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-date">
                Ngày chi
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white focus:border-red-500"
                id="grid-date"
                type="date"
                placeholder="date"
                value={date || ''}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-payment-method">
                Phương thức thanh toán
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none hover:bg-white focus:border-red-600"
                  id="grid-state"
                  value={paymentMethod || ''}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  {props.paymentmethod.paymentlist && props.paymentmethod.paymentlist.map(item => (  // Sử dụng props
                    <option key={item.id} value={item.id || ''}>{item.type_payment_method}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end -mx-3 mb-6">
            <div className="w-full px-3 flex justify-end">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
                <span>Create</span>
                <i className="fa fa-plus w-4 h-4 ml-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categorySpend: state.categorySpend,
    paymentmethod: state.paymentmethod
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSpendList: () => dispatch(FetchTypeSpendList()), // Tải danh sách chi tiêu
    loadPaymentMethods: () => dispatch(ListPaymentmethod()), // Tải danh sách phương thức thanh toán
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditSpend);
