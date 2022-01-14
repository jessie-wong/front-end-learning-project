import React, { useEffect, useState } from "react";

export default function ReactState(props) {
    const { name } = props;
    return (
        <div>
            <PropsState name={name} />
            <OtherState />
        </div>
    );
}

function PropsState(props) {
    const { name } = props;
    return <div>{name}</div>;
}

const OtherState = React.memo((props) => {
    console.log('other');
    return <div>{'other'}</div>
})