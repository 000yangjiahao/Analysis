import './App.css'
import { Flex } from 'antd'
import Cards from './controls/Cards'
import Sentence from './controls/Sentence'
import DemoArea from './charts/Area'
import DemoColumn from './charts/Column'
import DemoBullet from './charts/Progress'
import Tags from './controls/TagsCombination'
import HotSearchCard from './controls/HotSearchCard'
import AccountCard from './controls/AccountCard'
import ChartTags from './controls/ChartTags'

export default function App() {
  return (
    <div className='main'>
      <Flex justify='flex-start' align='flex-start' gap='middle' wrap="wrap">
        <Cards title='总销售额' num='￥126,560' Chart={Sentence} mes='日销售额￥12,423' />
        <Cards title='访问量' num='8,846' Chart={DemoArea} mes='日访问量1,234' />
        <Cards title='支付笔数' num='6,560' Chart={DemoColumn} mes='转化率60%' />
        <Cards title='运用活动效果' num='78%' Chart={DemoBullet} />
        <div style={{ backgroundColor: 'white', width: '100%', margin: 'auto 10px auto 10px' }}>
          <Tags />
        </div>
        <div style={{ width: '100%', backgroundColor: 'aliceblue' }}>
          <Flex justify='flex-start'>
            <div style={{ width: '49%', marginRight: '7.5px' }}>
              <HotSearchCard />
            </div>
            <div style={{ width: '49%', marginLeft: '7.5px' }}>
              <AccountCard />
            </div>
          </Flex>
          <div style={{backgroundColor:'white', margin:'10px 0px auto 0px', width:'100%'}}>
            <ChartTags />
          </div>
        </div>
      </Flex>
    </div>
  )
}