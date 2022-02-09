import React, { useEffect, useState } from "react";
import ClassComponents from "./class-components";

function LearnHook(props) {
    const { name } = props;
    let hookRef = null;
    console.log(hookRef);
    return (
        <div>
            <ClassComponents ref={(refs) => {hookRef = refs;console.log(refs?.start())}} />
        </div>
    );
}
export default React.memo(LearnHook);