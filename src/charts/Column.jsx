import { Column } from '@ant-design/plots';
import data from './ColumnSmall.json'
const DemoColumn = () => {
    const config = {
      data,
      xField: 'type',
      yField: 'value',
      seriesField: '',
      color:'#5B8FF9',
      legend: false,
      xAxis: {
        label:false
      },
      yAxis: {
        label:false
      },
    };
    return <Column {...config} />;
  };
  export default DemoColumn