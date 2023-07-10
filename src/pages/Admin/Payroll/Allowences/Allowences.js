import { Tabs } from "antd";
import Tab from "./Tabs/Tab";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Site Allowances`,
    children: <Tab/>,
  },
  {
    key: "2",
    label: `Worker Allowances`,
    children: <Tab/>,
  },
  {
    key: "3",
    label: `Task Allowances`,
    children: <Tab/>,
  },
  {
    key: "4",
    label: `Payroll Category Allowances`,
    children: <Tab/>,
  },
  {
    key: "5",
    label: `All`,
    children: <Tab/>,
  },
];
const Allowences = () => (
  <div className="p-6">
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);
export default Allowences;
