// 导入包
import React, { useEffect, useState } from 'react';
import './style.less';
import ScrollBoard from '@jiaminghi/data-view-react/es/scrollBoard'
import { cloneDeep } from 'lodash';

const name = 'zhangsan';
const CONFIG = {
  header: ['时间段', '发电量均值\n', '日前均值<br />(元/MWh)'],
  data: [
    [`00:00-07:00`, 5, '100'],
    [`07:00-07:00`, 80, '200'],
    [`08:00-07:00`, 300, '80'],
    [`11:00-07:00`, 60, '100']
  ],
  rowNum: 3
};
const RankingCONFIG = {
  header: ['时间段', '发电量均值\n', '日前均值<br />(元/MWh)'],
  data: [
    [4, 5, '100'],
    [3, 80, '200'],
    [2, 300, '80'],
    [1, 60, '100']
  ],
  rowNum: 3
};
export default function TableScroll() {
  const [mergeConfig, setMergeConfig] = useState(CONFIG);
  const [rankmergeConfig, setRankMergeConfig] = useState(RankingCONFIG);
  useEffect(() => {
    const { data: tableData } = CONFIG;
    const newConfig = cloneDeep(CONFIG);
    const max1 = 300;
    const max2 = 200;
    const renderData = [];
    tableData.forEach((row, rowIndex) => {
      const newRow = [];
      row.forEach((col, colIndex) => {
        let newCol = col;
        if (colIndex === 1) {
          const width = col / max1 * 100;
          newCol = `<div style="display:inline-block; line-height: 25px; width: ${width}%; height: 25px; background: red;"> ${col} </div>`
        }
        newRow.push(newCol);
      });
      renderData.push(newRow);
    });
    Object.assign(newConfig, { data: renderData });
    setMergeConfig(newConfig);
  }, []);

  useEffect(() => {
    const { data: tableData } = RankingCONFIG;
    const newConfig = cloneDeep(RankingCONFIG);
    const renderData = [];
    tableData.forEach((row, rowIndex) => {
      const newRow = [];
      row.forEach((col, colIndex) => {
        let newCol = col;
        if (colIndex === 0) {
          newCol = `<div style="display:inline-block; line-height: 25px;width: 25px; height: 25px; background: red; border-radius: 50%; text-align:center"> ${col} </div>`
        }
        newRow.push(newCol);
      });
      renderData.push(newRow);
    });
    Object.assign(newConfig, { data: renderData });
    setRankMergeConfig(newConfig);
  }, []);
  return (
    <div className='board'>
      <ScrollBoard config={mergeConfig} style={{ width: '500px', height: '220px' }} />
      <br />
      <ScrollBoard config={rankmergeConfig} style={{ width: '500px', height: '220px' }} />
    </div>
  )
}


// ReactDOM.render(myDiv, document.getElementById("app"));
