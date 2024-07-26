import React from 'react';
import IncomeCate1 from './chartIncomeCate';
import App1 from './chartSpendingcate';
const chartAll =()=>{
       return(
              <><div className='flex justify-evenly mt-5'> 
                     <div>
                             <IncomeCate1/>
                             <span>
                                   Thống kê khoản thu
                             </span>
                     </div>
                     <div>
                            <App1/>
                            <span>
                                   Thống kê khoản chi
                             </span>
                     </div>
              </div> 
              </>
       );
};
export default chartAll