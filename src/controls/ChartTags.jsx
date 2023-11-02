import React from 'react';
import { Tabs, Flex } from 'antd';
import EasyPie from '../charts/EasyPie'
import MyDoubleLine from '../charts/MyDoubleLine';

const ChartTags = () => {
  return (
      <Tabs
        defaultActiveKey="1"
        style={{ height: 220 }}
        items={new Array(10).fill(null).map((_, i) => {
          const data = Math.floor(Math.random() * 81) + 20;
          const id = String(i);
          return {
            label: (
              <Flex justify="flex-start">
                <div style={{ width: '30px' }}>
                  <div style={{ fontSize: '25px', minWidth: '100%' }}>Store {i}</div>
                  <div style={{ color: 'gray', marginTop: '10px', fontSize: '20px' }}>转化率</div>
                  <div style={{ fontSize: '25px' }}>{data}%</div>
                </div>
                <div style={{ height: '140px', marginLeft: '30px' }}>
                  <EasyPie data={data} />
                </div>
              </Flex>
            ),
            key: id,
            children: <div style={{ height: '800px', width:'95%', marginLeft:'10px', backgroundColor:'white'}}>
              <div style={{ margin: '0 20px,auto 20'}}>
                <MyDoubleLine />
              </div>
            </div>,
          };
        })}
      />
  );
};

export default ChartTags;