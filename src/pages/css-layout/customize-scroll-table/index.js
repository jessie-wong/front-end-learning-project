import React, { useMemo } from 'react';
import { transColumns } from './columnsUtils';
import Data from './data';
import SelfScrollTable from './self-scroll-table';
import './style.less';

function ScrollTableDemo(props) {
    const {columns, dataSource} = Data;
    const renderColumns = useMemo(() => {
        return transColumns(columns);
    }, [columns]);
    return (
        <SelfScrollTable dataSource={dataSource} columns={renderColumns} config={{rowNums: 3}} rowKey={'time'}/>
    );
}
export default ScrollTableDemo;