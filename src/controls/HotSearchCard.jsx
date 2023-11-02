import { Button, Card, Dropdown, Flex } from 'antd';
import { InfoCircleOutlined, CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import Line1 from '../charts/Line1';
import MyTable from './MyTable';

const items = [
    {
        key: '1',
        label: (
            <Button type='text'>
                操作一
            </Button>
        ),
    },
    {
        key: '2',
        label: (
            <Button type='text'>
                操作二
            </Button>
        ),
    },
]
const HotSearchCard = () => {

    return (
        <>
            <Card title='线上热门搜索' bordered={false}
                extra={
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement='top'
                    >
                        <span style={{ fontSize: '30px', position: 'relative' }}>...</span>
                    </Dropdown>}>
                <Flex justify='flex-start'>
                    <div style={{ width: '50%' }}>
                        <Card bordered={false}>
                            <div style={{ color: 'gray' }}>搜索用户数 <InfoCircleOutlined /></div>
                            <Flex justify='flex-start'>
                                <div>12,321</div>
                                <div style={{ marginLeft: '100px' }}>17.1 <CaretUpOutlined style={{ color: 'red' }} /></div>
                            </Flex>
                            <div style={{ height: '100px' }}>
                                <Line1 />
                            </div>
                        </Card>
                    </div>
                    <div style={{ width: '50%' }}>
                        <Card bordered={false}>
                            <div style={{ color: 'gray' }}>人均搜索次数 <InfoCircleOutlined /></div>
                            <Flex justify='flex-start'>
                                <div>2.7</div>
                                <div style={{ marginLeft: '100px' }}>26.2<CaretDownOutlined style={{ color: 'green' }} /></div>
                            </Flex>
                            <div style={{ height: '100px' }}>
                                <Line1 />
                            </div>
                        </Card>
                    </div>
                </Flex>
                <MyTable />
            </Card>
        </>
    )
}

export default HotSearchCard    