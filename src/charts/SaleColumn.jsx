import React from 'react';
import { Column } from '@ant-design/plots';

const SaleColumn = () => {
    const data = [
        {
            month: '1月',
            销售额: 1189,
        },
        {
            month: '2月',
            销售额: 588,
        },
        {
            month: '3月',
            销售额: 458,
        },
        {
            month: '4月',
            销售额: 776,
        },
        {
            month: '5月',
            销售额: 285,
        },
        {
            month: '6月',
            销售额: 721,
        },
        {
            month: '7月',
            销售额: 1154,
        },
        {
            month: '8月',
            销售额: 877,
        },
        {
            month: '9月',
            销售额: 667,
        },
        {
            month: '10月',
            销售额: 1106,
        },
        {
            month: '11月',
            销售额: 842,
        },
        {
            month: '12月',
            销售额: 670,
        },
    ];
    const config = {
        data,
        xField: 'month',
        yField: '销售额',
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
    };
    return <Column {...config} />;
};
export default SaleColumn