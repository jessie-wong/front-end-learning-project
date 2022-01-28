// 导入包
import React, { useEffect, useState } from 'react';
import ScrollTable from './scroll-table/customize-scroll-table/demo';
import './style.less';
// import TableScroll from './table-scroll';
import ScrollBoard from './scroll-table/scroll-table-datav-raw';
import { Radio } from 'antd';
import ScrollTableDemo from './scroll-table/customize-scroll-table';

// HTML是最优秀的标记语言；
// 注意：在JS文件中，默认不能写类似于HTML的标记语言，否则打包会失败
// 可以使用babel来转换这些JS中的标记
// 这种在JS中混合写入类似于HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质还是在运行的时候，被babel转换成React.createElement形式来执行的
const CONFIG = {
  header: ['时间段', '发电量均值\n', '日前均值<br />(元/MWh)'],
  data: [
    [`00:00-07:00`, 5, '100'],
    [`07:00-07:00`, 80, '200'],
    [`08:00-07:00`, 300, '80'],
    [`11:00-07:00`, 60, '100']
  ],
  rowNum: 3
};
export default function ComponentsStore() {
  const [start, setStart] = useState(true);

  return (
    <div>
      <h1>自制滚动表格</h1>
      <ScrollTable />
      <br />
      <br />
      <h1>datav源码</h1>
      <ScrollBoard config={CONFIG} startScroll={start} style={{ width: '500px', height: '220px' }}/>
      {/* <TableScroll /> */}
      <Radio onClick={() => setStart(!start)} checked={start}>启用轮播</Radio>
      <br />
      <br />
      <h1>支持自定义内容-自制滚动表格</h1>
      <ScrollTableDemo />

    </div>
  );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
