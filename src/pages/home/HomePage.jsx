import React from 'react';
const data = [
  { source: "Google", visitors: "3.5K", revenues: "$5,768", sales: 590, conversion: "4.8%", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" },
  { source: "Twitter", visitors: "2.2K", revenues: "$4,635", sales: 467, conversion: "4.3%", logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" },
  { source: "Github", visitors: "2.1K", revenues: "$4,290", sales: 420, conversion: "3.7%", logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { source: "Vimeo", visitors: "1.5K", revenues: "$3,580", sales: 389, conversion: "2.5%", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Vimeo_Logo.svg" },
  { source: "Facebook", visitors: "3.5K", revenues: "$6,768", sales: 390, conversion: "4.2%", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
];
const Card = ({ title, value, increase, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor} text-white`}>
      <div className="text-lg">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm">{increase} From previous period</div>
    </div>
  );
}
const HomePage = () => {
  return (
       <>
       <div className="p-4 space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <Card title="Khoản đầu tư" value="65841$" increase="10%" bgColor="bg-purple-500" />
        <Card title="Khoản thu hồi" value="52142$" increase="5.6%" bgColor="bg-blue-500" />
        <Card title="Khoản chi hàng tháng" value="2365$" increase="7.02%" bgColor="bg-pink-500" />
        <Card title="Khoản dự trữ" value="854$" increase="9.9%" bgColor="bg-green-500" />
      </div>

    </div>
    <div className="p-6 mt-5 bg-white rounded-lg shadow-lg ">
      <h2 className="mb-4 text-xl font-bold">Thống kê chi tiêu</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Khoản chi</th>
            <th className="pb-2">Học tập</th>
            <th className="pb-2">Đầu tư</th>
            <th className="pb-2">Mua sắm</th>
            <th className="pb-2">Thức ăn</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 flex items-center">
                <img src={item.logo} alt={`${item.source} logo`} className="w-6 h-6 mr-2"/>
                {item.source}
              </td>
              <td className="py-2">{item.visitors}</td>
              <td className="py-2 text-green-500">{item.revenues}</td>
              <td className="py-2">{item.sales}</td>
              <td className="py-2 text-blue-500">{item.conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default HomePage;
