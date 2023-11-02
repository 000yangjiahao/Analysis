import { Card } from 'antd';
import { Divider, Flex } from 'antd';
import './Cards.css'
import { InfoCircleOutlined,CaretUpOutlined,CaretDownOutlined } from "@ant-design/icons"
export default function Cards({ title, num, Chart, mes }) {
    return (
        <>
            <Card style={{ width: '24%' }}>
                <Flex justify='space-between'>
                    <div className='title'>{title}</div>
                    <InfoCircleOutlined />
                </Flex>
                <Flex justify='flex-start' >
                    <div className='num'>
                        {num}
                    </div>
                </Flex>
                <Flex justify='flex-start' align='center' >
                    <div style={{ height: '100px', width: '100%' }}>
                        <Chart />
                    </div>
                </Flex>
                <Divider />
                <div className='mes'>
                    {mes ? mes :
                        <span>
                            周同比 12%
                            <CaretUpOutlined style={{ fontSize: '12px', color: 'red' }} />
                            日同比 11%
                            <CaretDownOutlined style={{ fontSize: '12px', color: 'green' }} />
                        </span>
                    }
                </div>
            </Card>
        </>
    )
}