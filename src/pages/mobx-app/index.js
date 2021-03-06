// 导入包
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Clock} from './customized-observable';
import { autorun } from 'mobx';

// HTML是最优秀的标记语言；
// 注意：在JS文件中，默认不能写类似于HTML的标记语言，否则打包会失败
// 可以使用babel来转换这些JS中的标记
// 这种在JS中混合写入类似于HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质还是在运行的时候，被babel转换成React.createElement形式来执行的

export default function MobxApp() {
  const [name, setName] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/mobx-app")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setName(data.name);
      });
  }, []);

  const clock = new Clock()

  const disposer = autorun(() => console.log(clock.getTime()))
  // 控制台打印输出运行中的“每一秒”

  // 如果没有其他人使用同样的“clock”，它也会停止滴答作响。并且停止在控制的输出
  disposer()

  return (
    <div id="my-div" title="my div">
      name:{name}
    </div>
  );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
