import React from 'react';
import { Pie } from '@ant-design/plots';

const EasyPie = ({ data }) => {
  const pieData = [
    {
      type: '已完成',
      value: data,
    },
    {
      type: '未完成',
      value: 100 - data,
    },
  ];

  const config = {
    appendPadding: 10,
    data: pieData, // 修改为data
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      content: null,
    },
    legend: false,
    tooltip: false,
    color: ['orange', 'gray'],
    statistic :{
        title:false,
        content:false
    }
  };

  return <Pie {...config} />;
};

export default EasyPie;
