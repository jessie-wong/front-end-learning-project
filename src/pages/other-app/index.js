// 导入包
import React, { useEffect, useRef, useState } from 'react';
import ReactState from './learn-react/react-state';

// HTML是最优秀的标记语言；
// 注意：在JS文件中，默认不能写类似于HTML的标记语言，否则打包会失败
// 可以使用babel来转换这些JS中的标记
// 这种在JS中混合写入类似于HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质还是在运行的时候，被babel转换成React.createElement形式来执行的

export default function OtherApp() {
    // useEffect(() => {
    //     fetch("http://localhost:3000/other-app", {method: 'post'})
    //       .then((res) => {
    //           return res.json();
    //         })
    //       .then((data) => {
    //         console.log(data);
    //       })
    //   }, []);
    const [name, setName] = useState('me');
    useEffect(() => {
        const interval = setInterval(() => {
            setName(new Date().toString());
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    });
    const domRef = useRef();
    useEffect(() => {
        console.log('宽度', domRef?.current?.offsetWidth);
            // console.log('高度', domRef.current.scrollHeight);
        console.log('高度', domRef?.current?.offsetHeight);
        window.addEventListener('resize', () => {
            console.log('宽度', domRef.current.offsetWidth);
            // console.log('宽度', domRef.current.clientWidth);
            // console.log('高度', domRef.current.scrollHeight);
            console.log('高度', domRef.current.offsetHeight);
        })
    }, [domRef.current]);
    return (
        <div>
            <ReactState name={name} />
            <div style={{height: '60px', border: '1px blue solid', textAlign: 'center'}} ref={domRef}>
                <div style={{ display: 'inline-block', width: '25px', height: '25px', background: 'red'}} />
            </div>
        </div>
    );
}


// ReactDOM.render(myDiv, document.getElementById("app"));
