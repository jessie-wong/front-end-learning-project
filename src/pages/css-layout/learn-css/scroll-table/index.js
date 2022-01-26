import { cloneDeep, isNil } from "lodash";
import React, { useEffect, useState } from "react";
import './style.less';

const data = ['a', 'b', 'c', 'd'];
const HEIGHT = '25px';
function ScrollTable(props) {
    const [renderData, setRenderData] = useState(data);
    const [rawData, setRawData] = useState(data);
    const [heights, setHeights] = useState([HEIGHT, HEIGHT, HEIGHT, HEIGHT]);
    const [start, setStart] = useState(true);
    const initHeight = (animationIndex, data) => {
        const length = data?.length;
        const renderHeights = Array(length).fill(HEIGHT);
        renderHeights.fill(0, 0, animationIndex);
        setHeights(renderHeights);
        return initHeight;
    }
    useEffect(() => {
        const timer = setInterval(() => {
            if(!start) return;
            const animationIndex = 1;
            const newData = cloneDeep(rawData);
            initHeight(animationIndex, newData);
            let rows = newData.slice(animationIndex);
            rows.push(...newData.slice(0, animationIndex));
            setRawData(rows);
            rows = rows.slice(0, 4)
            setRenderData(rows);
        }, 2000);
        return () => {
            clearInterval(timer);
        }
    })
    
    return (
        <div style={{ height: '75px', overflow: 'hidden' }} onMouseOver={() => setStart(false)} onMouseLeave={() => setStart(true)}>
            {renderData.map((name, index) => {
                return <div className='row' key={`${name}`} style={{background: index % 2 === 1 ? 'red' : 'blue', height: heights[index], lineHeight: heights[index] }}>
                    <div className="ceil">
                        {heights[index] ? name : ''}
                    </div>
                </div>;
            })}
        </div>
    );
}

export default ScrollTable;