import React from 'react';
import { Column } from '@ant-design/plots';

const VisitColumn = () => {
    const data = [
        {
            month: '1月',
            访问量: 1189,
        },
        {
            month: '2月',
            访问量: 588,
        },
        {
            month: '3月',
            访问量: 458,
        },
        {
            month: '4月',
            访问量: 776,
        },
        {
            month: '5月',
            访问量: 285,
        },
        {
            month: '6月',
            访问量: 721,
        },
        {
            month: '7月',
            访问量: 1154,
        },
        {
            month: '8月',
            访问量: 877,
        },
        {
            month: '9月',
            访问量: 667,
        },
        {
            month: '10月',
            访问量: 1106,
        },
        {
            month: '11月',
            访问量: 842,
        },
        {
            month: '12月',
            访问量: 670,
        },
    ];
    const config = {
        data,
        xField: 'month',
        yField: '访问量',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };
    return <Column {...config} />;
};
export default VisitColumn