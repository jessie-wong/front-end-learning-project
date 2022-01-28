import React from 'react';
import { isNil } from 'lodash';

const STARDAND_TABLE_KEY = ['key', 'title', 'dataIndex', 'width'];

function chooseClassName(text){
    return isNil(text) ? 'ceil' : (text === 'fail' ? 'fail-ceil' : 'success-ceil');
}

export function transColumns(columns, onEvents) {
    const renderColumns = [];
    columns.forEach(element => {
        const columnObj = {};
        STARDAND_TABLE_KEY.forEach(key => {
            columnObj[key] = element[key];
        });
        columnObj.render = (text, record, index) => {
            let content = <div className='ceil'>{isNil(text) ? '-' : text}</div>;
            switch (element.type) {
                case 'action':
                    const { actions } = element;
                    content = actions.map(action => {
                        switch (action) {
                            case 'download':
                                return (
                                    <span
                                        onClick={() => onEvents('download', record)}
                                        role={'button'}
                                        tabIndex={0}
                                        style={{ color: '#348DFA', cursor: 'pointer' }}
                                        key={action}
                                    >
                                        下载
                                    </span>
                                );
                            default:
                                return <span />;
                        }
                    });
                    break;
                case 'colorMark':
                    content = <div className={chooseClassName(text)}>{isNil(text) ? '-' : text}</div>;
                    break;
            }
            return content;
        };
        renderColumns.push(columnObj);
    });
    return renderColumns;
}
