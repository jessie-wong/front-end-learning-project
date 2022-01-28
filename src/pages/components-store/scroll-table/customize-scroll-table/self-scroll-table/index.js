import { Table } from 'antd';
import { cloneDeep } from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './style.less';

const HEIGHT = '100%';
/**
 * 轮播表格
 * @param columns 表头
 * @param dataSource 数据源
 * @param config 表格配置
 * @description {
 * —— carousel 轮播方式 ['page', 'single']
 * —— playTimes 轮播次数(负数代表无限)
 * —— autoPlay 是否自动轮播
 * —— hoverPause 是否悬浮暂停轮播
 * —— waitTime 轮播时间间隔（ms）
 * }
 * @param onClick 点击事件
 * @param onMouseOver 鼠标悬浮事件
 * @param onMouseLeave 鼠标离开事件
 * @param rowKey 指定key字段
 */
function SelfScrollTable(props) {
    const { columns, dataSource, config, onClick: _onClick, onMouseLeave: _onMouseLeave, onMouseOver: _onMouseover, rowKey } = props;
    const { rowNums = 5, carousel, playTimes = -1, autoPlay = true, hoverPause = true, waitTime = 2000 } = config || {};
    const [widths, setWidths] = useState([]);
    const [heights, setHeights] = useState([]);
    const [nextTimeData, setNextTimeData] = useState(dataSource);
    const [renderData, setRenderData] = useState(dataSource);
    const [start, setStart] = useState(autoPlay);
    const length = dataSource.length;
    let times = playTimes * length;
    useEffect(() => {
        const timer = setInterval(() => {
            if (start && times !== 0 && rowNums < length) {
                scrolling();
                times--;
            }
        }, waitTime);
        return () => {
            clearInterval(timer);
        }
    });

    const scrolling = () => {
        let animationIndex = 1;
        if (carousel === 'page') {
            animationIndex = rowNums;
        }
        const thisTimeData = cloneDeep(nextTimeData);
        let rows = thisTimeData.slice(animationIndex);
        rows.push(...thisTimeData.slice(0, animationIndex));
        setNextTimeData(rows);
        rows = rows.slice(0, (rowNums || 5) + 1);
        setRenderData(rows);
        initHeight(animationIndex, thisTimeData);
    }

    const initWidth = () => {
        // 基于width的值初始化
    }

    const initHeight = (animationIndex, data) => {
        // 基于height的值初始化
        const length = data?.length;
        const renderHeights = Array(length).fill(HEIGHT);
        renderHeights.fill(0, 0, animationIndex);
        setHeights(renderHeights);
        return initHeight;
    }

    return (
        <div className='scroll-table'
            onMouseOver={() => { if (hoverPause) { setStart(false); _onMouseover(); } }}
            onMouseLeave={() => { setStart(true); _onMouseLeave(); }}
        >
            <div className='scroll-table-header' key={'header'}>
                <div className='scroll-table-row scroll-table-row-header'>
                    {!!columns && !!columns.length && columns.map((item, index) => {
                        return (
                            <div
                                className='scroll-table-cell'
                                style={{ width: item.width || `${100 / length}%` }}
                                key={item.key}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='sroll-table-body' key={'body'}>
                {!!renderData && !!renderData.length && renderData.map((record, index) => {
                    return (
                        <div
                            className='scroll-table-row'
                            style={{ height: heights[index] }}
                            key={record[rowKey]}
                        >
                            {
                                !!columns && !!columns.length && columns.map((col) => {
                                    return (
                                        <div
                                            className='scroll-table-cell'
                                            style={{ width: col.width || `${100 / length}%` }}
                                            key={`${record[rowKey]}-${col.key}`}
                                        >
                                            {col.render(record[col.dataIndex], record, index)}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })}
            </div>
        </div >
    );
}
export default SelfScrollTable;