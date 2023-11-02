import { Tabs, Flex } from 'antd';
import Calendar from './Calendar';
import SaleColumn from '../charts/SaleColumn';
import VisitColumn from '../charts/VisitColumn';
import MyList from './MyList';
import MyList2 from './MyList2';


const operations = <div>
    <Calendar />
</div>

const items = [
    {
        key: '1',
        label: '销售额',
        children:
            <Flex justify='flex-start'>
                <div style={{ width: '65%' }}>
                    <SaleColumn />
                </div>
                <div style={{ width: '30%', marginLeft: '50px' }}>
                    <MyList />
                </div>
            </Flex>,
    },
    {
        key: '2',
        label: '访问量',
        children:
            <Flex justify='flex-start'>
                <div style={{ width: '65%' }}>
                    <VisitColumn />
                </div>
                <div style={{ width: '30%', marginLeft: '50px' }}>
                    <MyList2 />
                </div>
            </Flex>,
    },

];
const Tags = () => {
    return (
        <>
            <Tabs tabBarExtraContent={operations} items={items} />
        </>
    )
}

export default Tags