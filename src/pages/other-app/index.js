// 导入包
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

// HTML是最优秀的标记语言；
// 注意：在JS文件中，默认不能写类似于HTML的标记语言，否则打包会失败
// 可以使用babel来转换这些JS中的标记
// 这种在JS中混合写入类似于HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质还是在运行的时候，被babel转换成React.createElement形式来执行的

export default function OtherApp() {
    useEffect(() => {
        fetch("http://localhost:3000/other-app", {method: 'post'})
          .then((res) => {
              return res.json();
            })
          .then((data) => {
            console.log(data);
          })
      }, []);
    return (
        <div id="my-div" title="my div">
            这是一个元素
        </div>
    );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
