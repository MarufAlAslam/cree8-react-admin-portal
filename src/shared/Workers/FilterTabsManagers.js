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
];
const FilterTabsManagers = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default FilterTabsManagers;