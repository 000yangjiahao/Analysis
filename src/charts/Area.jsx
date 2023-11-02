import React from 'react';
import { Area } from '@ant-design/plots';
import data from'./AreaData.json'

export default function DemoArea() {
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
            label:false,
        },
        yAxis: {
            range: [0, 1],
            label:false,
          },
        
    };

    return <Area {...config} />;
};
