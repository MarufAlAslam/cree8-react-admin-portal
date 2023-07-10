import { Tabs } from 'antd';
import Overviews from './Tabpans/Overviews';
import Areas from './Tabpans/Areas';
import Tasks from './Tabpans/Tasks';
import Timesheet from './Tabpans/Timesheet';
import ProductivityOrders from './Tabpans/ProductivityOrders';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Overviews`,
    children: <Overviews/>,
  },
  {
    key: '2',
    label: `Areas`,
    children: <Areas/>,
  },
  {
    key: '3',
    label: `Tasks`,
    children: <Tasks/>,
  },
  {
    key: '4',
    label: `Timesheets`,
    children: <Timesheet/>,
  },
  {
    key: '5',
    label: `Productivity Orders`,
    children: <ProductivityOrders/>,
  }
];
const WorksiteTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default WorksiteTabs;