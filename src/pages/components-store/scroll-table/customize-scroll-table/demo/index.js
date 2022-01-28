import { Radio } from "antd";
import { cloneDeep, isNil } from "lodash";
import React, { useEffect, useState } from "react";
import './style.less';

const data = ['a', 'b', 'c', 'd'];
const HEIGHT = '25px';
const WIDTH = '50%';
function ScrollTable(props) {
    const [renderData, setRenderData] = useState(data);
    const [rawData, setRawData] = useState(data);
    const [heights, setHeights] = useState([HEIGHT, HEIGHT, HEIGHT, HEIGHT]);
    const [start, setStart] = useState(true);

    const [renderVerticalData, setRenderVerticalData] = useState(data);
    const [rawVerticalData, setRawVerticalData] = useState(data);
    const [verticalWidths, setVerticalWidths] = useState([WIDTH, WIDTH, WIDTH, WIDTH]);
    const [verticalStart, setVerticalStart] = useState(true);
    const initHeight = (animationIndex, data) => {
        const length = data?.length;
        const renderHeights = Array(length).fill(HEIGHT);
        renderHeights.fill(0, 0, animationIndex);
        setHeights(renderHeights);
        return initHeight;
    }
    const initWidth = (animationIndex, data) => {
        const length = data?.length;
        const renderWidths = Array(length).fill(WIDTH);
        renderWidths.fill(0, 0, animationIndex);
        setVerticalWidths(renderWidths);
        return renderWidths;
    }
    useEffect(() => {
        const timer = setInterval(() => {

            const animationIndex = 1;
            if (start) {
                const newData = cloneDeep(rawData);
                initHeight(animationIndex, newData);
                let rows = newData.slice(animationIndex);
                rows.push(...newData.slice(0, animationIndex));
                setRawData(rows);
                rows = rows.slice(0, 4)
                setRenderData(rows);
            }

            if (verticalStart) {
                const newData1 = cloneDeep(rawVerticalData);
                initWidth(animationIndex, newData1);
                let rows1 = newData1.slice(animationIndex);
                rows1.push(...newData1.slice(0, animationIndex));
                setRawVerticalData(rows1);
                rows1 = rows1.slice(0, 3)
                setRenderVerticalData(rows1);
            }
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    })
// aria-hidden = {verticalWidths[index] === 0}
    return (
        <div>
            <h1>{'横向滚动'}</h1>
            <div style={{ height: '75px', width: '200px', overflow: 'hidden' }} onMouseOver={() => setStart(false)} onMouseLeave={() => setStart(true)}>
                {renderData.map((name, index) => {
                    return <div className='row' key={`${name}`} style={{ background: index % 2 === 1 ? 'red' : 'blue', height: heights[index], lineHeight: heights[index]}}>
                        <div className="ceil" dangerouslySetInnerHTML={{ __html: name }} />
                        <div className="ceil" dangerouslySetInnerHTML={{ __html: name }} />
                    </div>;
                })}
            </div>
            <Radio onClick={() => setStart(!start)} checked={start}>启用轮播</Radio>

            <h1>{'纵向滚动'}</h1>
            <div style={{ height: '50px', width: '200px', overflow: 'hidden' }} onMouseOver={() => setVerticalStart(false)} onMouseLeave={() => setVerticalStart(true)}>
                <div className='vertical-row'>
                    {renderVerticalData.map((name, index) => {
                        return (
                            <div key={name} style={{ width: verticalWidths[index] }} className="vertical-ceil" dangerouslySetInnerHTML={{ __html: name }} />
                        );
                    })}
                </div>
                <div className='vertical-row'>
                    {renderVerticalData.map((name, index) => {
                        return (
                            <div key={name} style={{ width: verticalWidths[index] }} className="vertical-ceil" dangerouslySetInnerHTML={{ __html: `<div style='background: red; width: 100%'>${name}</div>` }} />
                        );
                    })}
                </div>;
            </div>
            <Radio onClick={() => setVerticalStart(!verticalStart)} checked={verticalStart}>启用轮播</Radio>
        </div>
    );
}

export default ScrollTable;