import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const Calendar = () => {
  const [selectData, setSelectData] = useState(null);
  const [selectedButton, setSelectedButton] = useState('本年'); // 添加一个用于跟踪选中按钮的状态

  const Day = (start, end) => {
    setSelectData([start, end]);
  };

  const getWeekRange = () => {
    const startOfWeek = dayjs().startOf('week').add(1, 'day');
    const endOfWeek = dayjs().endOf('week').add(1, 'day');
    return [startOfWeek, endOfWeek];
  };

  const getMonthRange = () => {
    const startOfMonth = dayjs().startOf('month');
    const endOfMonth = dayjs().endOf('month');
    return [startOfMonth, endOfMonth];
  };

  const getYearRange = () => {
    const startOfYear = dayjs().startOf('year');
    const endOfYear = dayjs().endOf('year');
    return [startOfYear, endOfYear];
  };

  const handleDateChange = (dates) => {
    setSelectData(dates);
  };

  useEffect(() => {
    // 在组件加载后设置默认日期范围为 "本年"
    Day(...getYearRange());
  }, []); // 空依赖数组表示只在组件加载时运行一次

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
    switch (buttonText) {
      case '今日':
        Day(dayjs(), dayjs());
        break;
      case '本周':
        Day(...getWeekRange());
        break;
      case '本月':
        Day(...getMonthRange());
        break;
      case '本年':
        Day(...getYearRange());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Button type='text' onClick={() => handleButtonClick('今日')} style={{ color: selectedButton === '今日' ? 'blue' : 'inherit' }}>今日</Button>
      <Button type='text' onClick={() => handleButtonClick('本周')} style={{ color: selectedButton === '本周' ? 'blue' : 'inherit' }}>本周</Button>
      <Button type='text' onClick={() => handleButtonClick('本月')} style={{ color: selectedButton === '本月' ? 'blue' : 'inherit' }}>本月</Button>
      <Button type='text' onClick={() => handleButtonClick('本年')} style={{ color: selectedButton === '本年' ? 'blue' : 'inherit' }}>本年</Button>
      <RangePicker
        defaultValue={[dayjs()]}
        format={dateFormat}
        value={selectData}
        onChange={handleDateChange}
      />
    </>
  );
}

export default Calendar;