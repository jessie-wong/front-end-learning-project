// 导入包
import React, { useEffect, useState } from 'react';
import ScrollTable from './scroll-table/customize-scroll-table/demo';
import './style.less';
// import TableScroll from './table-scroll';
import ScrollBoard from './scroll-table/scroll-table-datav-raw';
import { Radio } from 'antd';
import ScrollTableDemo from './scroll-table/customize-scroll-table';
const CONFIG = {
  rowNum: 3,
  carousel: 'single'
};
export default function ComponentsStore() {
  const [start, setStart] = useState(true);
  const [columns] = useState([{
    title: '时间段', dataIndex: 'time', render: (text, record, index) => text
  },
  {
    title: '发电量均值', dataIndex: 'elec', render: (text, record, index) => text
  },
  {
    title: <div>日前均值(元/MWh)</div>, dataIndex: 'ahead', render: (text, record, index) => text
  }]);
  const [dataSource] = useState([
    { time: '00:00-07:00', elec: 5, ahead: 100 },
    { time: '07:00-08:00', elec: 5, ahead: 100 },
    { time: '08:00-09:00', elec: 5, ahead: 100 },
    { time: '09:00-10:00', elec: 5, ahead: 100 }
  ]);
  return (
    <div>
      <h1>自制滚动表格</h1>
      {/* <ScrollTable /> */}
      <br />
      <br />
      <h1>datav源码</h1>
      <ScrollBoard config={CONFIG} autoPlay={start} columns={columns} dataSource={dataSource} style={{ width: '500px', height: '220px' }} />
      {/* <TableScroll /> */}
      <Radio onClick={() => setStart(!start)} checked={start}>启用轮播</Radio>
      <br />
      <br />
      <h1>支持自定义内容-自制滚动表格</h1>
      {/* <ScrollTableDemo /> */}

    </div>
  );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
