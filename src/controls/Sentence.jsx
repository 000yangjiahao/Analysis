import { Flex } from 'antd';
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"

export default function Sentence() {
    return (
        <Flex justify='flex-start' >
            <p>周同比 12%</p>
            <CaretUpOutlined style={{ fontSize: '12px', color: 'red' }} />
            <p>日同比 11%</p>
            <CaretDownOutlined style={{ fontSize: '12px', color: 'green' }} />
        </Flex>
    )
}