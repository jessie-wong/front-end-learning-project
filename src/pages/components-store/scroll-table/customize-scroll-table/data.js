export default {
    columns: [
        {
            key: 'time',
            dataIndex: 'time',
            title: '操作时间',
            type: 'String',
        },
        {
            key: 'user',
            dataIndex: 'user',
            title: '操作人',
            type: 'String'
        },
        {
            key: 'type',
            dataIndex: 'type',
            title: '操作类型',
            type: 'String'
        },
        {
            key: 'content',
            dataIndex: 'content',
            title: '操作内容',
            type: 'String'
        },
        {
            key: 'object',
            dataIndex: 'object',
            title: '操作对象',
            type: 'String'
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: '操作状态',
            type: 'colorMark'
        },
        {
            key: 'action',
            dataIndex: 'action',
            title: '',
            type: 'action',
            actions: ['download']
        }
    ],
    dataSource: [{
        time: '12:00',
        user: 'shuang',
        type: '123',
        content: '123',
        object: '123',
        status: 'success'
    }, {
        time: '13:00',
        user: 'shuang',
        type: '123',
        content: '123',
        object: '123',
        status: 'fail'
    }, {
        time: '14:00',
        user: 'shuang',
        type: '123',
        content: '123',
        object: '123',
        status: 'fail'
    }, {
        time: '15:00',
        user: 'shuang',
        type: '123',
        content: '123',
        object: '123',
        status: 'fail'
    }, {
        time: '16:00',
        user: 'shuang',
        type: '123',
        content: '123',
        object: '123',
        status: 'fail'
    }]
};
