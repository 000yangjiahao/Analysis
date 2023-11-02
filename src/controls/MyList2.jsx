import { Flex, List } from 'antd'

const data = [
    { name: '工专路 0 号店', visits: 323234 },
    { name: '工专路 1 号店', visits: 323234 },
    { name: '工专路 2 号店', visits: 323234 },
    { name: '工专路 3 号店', visits: 323234 },
    { name: '工专路 4 号店', visits: 323234 },
    { name: '工专路 5 号店', visits: 323234 },
    { name: '工专路 6 号店', visits: 323234 },
];

// 根据 visits 属性降序排序数据
const sortedData = data.sort((a, b) => b.visits - a.visits);

const MyList2 = () => {
    return (
        <>
            <List
                header={<div>门店访问量排名</div>}
                bordered={false}
                split={false}
                dataSource={sortedData}
                renderItem={(item, index) => (
                    <List.Item>
                        <Flex justify='space-between'>
                            {index < 3 ?
                                <view style={{ backgroundColor: 'black', borderRadius: '100%', width: '25px', height: '25px', textAlign: 'center' }}>
                                    <view style={{ color: 'white' }}>
                                        {index + 1}
                                    </view>
                                </view>
                                :
                                <view style={{ borderRadius: '100%', width: '25px', height: '25px', textAlign: 'center' }}>
                                    <view>
                                        {index + 1}
                                    </view>
                                </view>
                            }
                            {' '}
                            {item.name}
                            {' '}
                            <span style={{ marginLeft: '250px' }}>{item.visits}</span>
                        </Flex>
                    </List.Item>
                )}
            />
        </>
    );
};

export default MyList2