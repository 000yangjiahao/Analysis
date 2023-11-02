import React from 'react';
import { Card, Button, Dropdown, Radio } from 'antd';
import { useState } from 'react';
import AllPie from '../charts/AllPie';
import OnlinePie from '../charts/OnlinePie';
import OfflinePie from '../charts/OfflinePie';

const AccountCard = () => {

    const [cardContent, setCardContent] = useState(<AllPie />);

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

    return (

        <Card
            title="销售额类别占比"
            bordered={false}
            style={{height:'100%'}}
            extra={
                <>
                    <Radio.Group
                        onChange={(e) => {
                            if (e.target.value === 'all') {
                                setCardContent(<AllPie />);
                            } else if (e.target.value === 'online') {
                                setCardContent(<OnlinePie />);
                            } else if (e.target.value === 'Offline') {
                                setCardContent(<OfflinePie />);
                            }
                        }}>
                        <Radio.Button value="all" > 全部渠道</Radio.Button>
                        <Radio.Button value="online">线上</Radio.Button>
                        <Radio.Button value="Offline">门店</Radio.Button>
                    </Radio.Group>
                    <span style={{ marginLeft: '10px' }}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement='top'
                        >
                            <span style={{ fontSize: '30px', position: 'relative' }}>...</span>
                        </Dropdown>
                    </span>
                </>
            }
        >
            <div>销售额</div>
            {cardContent}
        </Card>
    )
}

export default AccountCard;