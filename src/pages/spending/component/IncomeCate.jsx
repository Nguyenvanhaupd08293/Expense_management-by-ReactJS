import React, { useState } from 'react';
const IncomeCate = () => {
  const [selected, setSelected] = useState(null);

  const items = [
    { id: 1, src: 'https://www.svgrepo.com/show/505195/hand-pulled-noodle.svg', label: 'Ăn uống' },
    { id: 2, src: 'https://www.svgrepo.com/show/508338/gray-tshirt.svg', label: 'Quần áo' },
    { id: 3, src: 'https://www.svgrepo.com/show/530598/building.svg', label: 'Y tế' },
    { id: 4, src: 'https://www.svgrepo.com/show/506898/cld-cloud-computer-network.svg', label: 'Chi tiêu hằng ngày' },
    { id: 5, src: 'https://www.svgrepo.com/show/503643/broom.svg', label: 'Mỹ phẩm' },
    { id: 6, src: 'https://www.svgrepo.com/show/492693/medical-examination-male.svg', label: 'Giao lưu' },
    { id: 7, src: 'https://www.svgrepo.com/show/499837/record.svg', label: 'Giáo dục' },
    { id: 8, src: 'https://www.svgrepo.com/show/503782/save-water.svg', label: 'Điện nước' },
  ];

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {items.map(item => (
          <div
            key={item.id}
            className={`flex flex-col items-center border-2 rounded-md cursor-pointer bg-white transition-all ease-linear p-2 gap-1 ${selected === item.id ? 'border-primary' : 'border-borderColor hover:border-primary'}`}
            onClick={() => handleSelect(item.id)}
          >
            <img src={item.src} alt={`icon ${item.label}`} className="w-16 h-16" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-4">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Giá chi
              </label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white" id="grid-first-name" type="number" placeholder="Price" />
              {/* <p className="text-red-500 text-xs italic">Vui lòng nhập giá.</p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                Ngày chi
              </label>
              <input className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none hover:bg-white focus:border-red-500" id="grid-password" type="date" placeholder="date" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-payment-method">
                Phương thức thanh toán
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none hover:bg-white focus:border-red-600" id="grid-state">
                  <option>Chuyển khoản</option>
                  <option>Tiền mặt</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end -mx-3 mb-6">
            <div className="w-full px-3 flex justify-end">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Create</span>
                <i className="fa fa-plus w-4 h-4 ml-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
     
     export default IncomeCate;