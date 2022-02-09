import React from "react";

export default class ClassComponents extends React.Component {
    constructor(props) {
        super(props);
    }
    start = () =>{
        console.log('开始');
    }
    render() {
        return (<div>{'类组件'}</div>);
    }
}