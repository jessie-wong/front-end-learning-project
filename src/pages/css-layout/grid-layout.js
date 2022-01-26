// 导入包
import React, { useEffect, useState } from 'react';
import './style.less';

// HTML是最优秀的标记语言；
// 注意：在JS文件中，默认不能写类似于HTML的标记语言，否则打包会失败
// 可以使用babel来转换这些JS中的标记
// 这种在JS中混合写入类似于HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质还是在运行的时候，被babel转换成React.createElement形式来执行的

export default function GridLayout() {

  return (
    <div>
      <div className='container'>
        <div className='header1'></div>
        <div className='header2'></div>
        <div className='header3'></div>
        <div className='header4'></div>
        <div className='sider1'></div>
        <div className='sider2'></div>
        <div className='map'></div>
        <div className='sider3'></div>
        <div className='sider4'></div>
        <div className='botton1'></div>
        <div className='botton2'></div>
      </div>
    </div>
  );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
