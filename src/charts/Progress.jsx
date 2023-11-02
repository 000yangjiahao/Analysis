import React from 'react';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
const data = [
    {
      ranges: [100],
      measures: [78],
      target: 85,
    },
  ]; 

  const config = {
    data,
    measureField: 'measures',
    rangeField: 'ranges',
    targetField: 'target',
    xField: null,
    color: {
      range: '#f0efff',
      measure: '#5B8FF9',
      target: '#3D76DD',
    },
    xAxis: {
      line: null,
      label:false
    },
    yAxis: false,
    // 自定义 legend
    label:false
  };
    return <Bullet {...config} />;
  };
export default DemoBullet
