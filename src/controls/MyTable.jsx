import React, { useState } from 'react';
import { Table } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"

const generateRandomData = () => {
  const data = [];
  for (let i = 1; i <= 50; i++) {
    const arrowFlag = Math.random() <= 0.5 ? <CaretUpOutlined style={{ color: 'red' }} /> : <CaretDownOutlined style={{ color: 'green' }} />;
    data.push({
      key: i.toString(),
      排名: i,
      搜索关键词: <a>搜索关键词-{i-1}</a>,
      用户数: Math.floor(Math.random() * 1001),
      周涨幅: <span>{Math.floor(Math.random() * 101)} {arrowFlag}</span>,
    });
  }
  return data;
};

const MyTable = () => {
  const [tableData, setTableData] = useState(generateRandomData());

  const columns = [
    {
      title: '排名',
      dataIndex: '排名',
    },
    {
      title: '搜索关键词',
      dataIndex: '搜索关键词',
    },
    {
      title: '用户数',
      dataIndex: '用户数',
      sorter: (a, b) => a.用户数 - b.用户数,
    },
    {
      title: '周涨幅',
      dataIndex: '周涨幅',
      sorter: (a, b) => {
        const aValue = parseInt(a.周涨幅);
        const bValue = parseInt(b.周涨幅);
        return aValue - bValue;
      },
    },
  ];

  const onChange = (sorter) => {
    if (sorter.field && sorter.order) {
      const sortedData = [...tableData].sort((a, b) => {
        if (sorter.order === 'ascend') {
          return sorter.column.sorter(a, b);
        } else {
          return sorter.column.sorter(b, a);
        }
      });
      setTableData(sortedData);
    }
  };

  return <Table columns={columns} dataSource={tableData} onChange={onChange} pagination={{pageSize:5}}/>;
};

export default MyTable;