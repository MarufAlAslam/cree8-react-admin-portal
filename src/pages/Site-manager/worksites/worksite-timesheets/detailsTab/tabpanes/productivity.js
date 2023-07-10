import { Tabs } from "antd";
import ProductivityOrdersTable from "../../../../../../shared/DataTable/ProductivityOrders";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Total(64)",
    children: <ProductivityOrdersTable />,
  },
  {
    key: "2",
    label: "Approved(12)",
    children: <ProductivityOrdersTable />,
  },
  {
    key: "3",
    label: "Active(9)",
    children: <ProductivityOrdersTable />,
  },
  {
    key: "4",
    label: "Remaining(6)",
    children: <ProductivityOrdersTable />,
  },
];
const Productivity = () => (
  <div className="mt-5">
    <Tabs
      className="details-tab"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </div>
);
export default Productivity;
