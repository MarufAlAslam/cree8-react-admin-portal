import { Tabs } from 'antd';
import Companies from './FilterTabContents/Companies';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Companies`,
    children: <Companies/>,
  },
  {
    key: '2',
    label: `Worksite`,
    children: `Worksite Content coming soon`,
  },
  {
    key: '3',
    label: `Area`,
    children: `Area Content coming soon`,
  },
];
const FilterTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default FilterTabs;