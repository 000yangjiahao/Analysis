import React from 'react';
import { Line } from '@ant-design/plots';

const Line1 = () => {
      const data = [
        {
            value: 1,
            num: '1'
        },
        {
            value: 6,
            num: '3'
        },
        {
            value: 4,
            num: '5'
        },
        {
            value: 8,
            num: '7'
        },
        {
            value: 3,
            num: '9'
        },
        {
            value: 7,
            num: '11'
        },
        {
            value: 2,
            num: '13'
        },
    ]
  const config = {
    data,
    xField: 'num',
    yField: 'value',
          xAxis: {
        label:false
      },
      yAxis: {
        label:false
      },
   smooth:'true'
   
  };
  return <Line {...config} />;
};
export default Line1