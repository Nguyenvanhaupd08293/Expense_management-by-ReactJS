import React from 'react';

const SpendCate = () => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-3">
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/505195/hand-pulled-noodle.svg" alt="icon food" className="w-16 h-16" />
        <span>Ăn uống</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/508338/gray-tshirt.svg" alt="icon clothes" className="w-16 h-16" />
        <span>Quần áo</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/530598/building.svg" alt="icon hospital" className="w-16 h-16" />
        <span>Y tế</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/506898/cld-cloud-computer-network.svg" alt="icon washing" className="w-16 h-16" />
        <span>Chi tiêu hằng ngày</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/503643/broom.svg" alt="icon cosmetics" className="w-16 h-16" />
        <span>Mỹ phẩm</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/492693/medical-examination-male.svg" alt="icon beer" className="w-16 h-16" />
        <span>Giao lưu</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/499837/record.svg" alt="icon education" className="w-16 h-16" />
        <span>Giáo dục</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/503782/save-water.svg" alt="icon water" className="w-16 h-16" />
        <span>Điện nước</span>
      </div>
      <div className="flex flex-col items-center border-2 border-borderColor rounded-md cursor-pointer bg-white hover:border-primary transition-all ease-linear p-2 gap-1">
        <img src="https://www.svgrepo.com/show/503876/electric-car.svg" alt="icon bus" className="w-16 h-16" />
        <span>Đi lại</span>
      </div>
    </div>
  );
};

export default SpendCate;