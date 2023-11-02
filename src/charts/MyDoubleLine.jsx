import React from 'react';
import { Line } from '@ant-design/plots';
import data from './MyDoubleLine.json'

const MyDoubleLine = () => {
    const config = {
        data,
        padding: 'auto',
        xField: 'time',
        yField: 'data',
        seriesField: 'type',
        legend: {
            position: 'top',
        },
        xAxis: {
            tickCount: 5,
        },
        autoFit: true,
        slider: {
            start: 0,
            end: 0.45,
        },
    };

    return <Line {...config} />;
};
export default MyDoubleLine