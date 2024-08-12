import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { FetchTypeSpendList } from '../../../redux/action/categorySpend';
import { FetchSpendObj, FunctionUpdateSpend } from '../../../redux/action/Spending';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ListPaymentmethod } from '../../../redux/action/payment_method';

const EditSpend = (props) => {  // Thêm props vào đây
  const [selected, setSelected] = useState(null);
  const [amount, setamount] = useState('');
  const [date, setDate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { id } = useParams();
  const userobj = useSelector((state) => state.spend.spendobj);
  const handleSelect = (id) => {
    setSelected(id);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selected || !amount || !date) {
      toast.error('Please fill out all fields');
      return;
    }
    const userObj = { id, selected, amount, date, paymentMethod };
    dispatch(FunctionUpdateSpend(userObj, id));
    console.log('Submitting:', userObj);
    toast.success('Expense updated successfully');
    setTimeout(() => {
      navigate('/listspend');
    }, 5000);
  }

  useEffect(() => {
    dispatch(FetchSpendObj(id));
    props.loadSpendList();  // Sử dụng props
    props.loadPaymentMethods();  // Sử dụng props
  }, []);

  useEffect(() => {
    if (userobj) {
      setSelected(userobj.selected);
      setamount(userobj.amount);
      setDate(userobj.date);
      setPaymentMethod(userobj.paymentMethod);
    }
  }, [userobj]);

  return (
    <>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {props.categorySpend.typespendlist && props.categorySpend.typespendlist.map(item => (  // Sử dụng props
          <div
            key={item.id_categorySpend}
            className={`flex flex-col items-center border-2 rounded-md cursor-pointer bg-white transition-all ease-linear p-2 gap-1 ${selected === item.id_categorySpend ? 'border-primary' : 'border-borderColor hover:border-primary'}`}
            onClick={() => handleSelect(item.id_categorySpend || '')}
          >
            <img src={item.icon_spend} alt={`icon ${item.category_name}`} className="w-16 h-16" />
            <span className="uppercase">{item.category_name}</span>
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
