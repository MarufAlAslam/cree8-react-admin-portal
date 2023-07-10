import { Tabs } from "antd";
import ProductivityOrdersTable from "../../../../../../shared/DataTable/ProductivityOrders";
import WorksiteProductivityOrders from "../../../../../../shared/DataTable/WorksiteProductivityOrders";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Total(64)",
    children: <WorksiteProductivityOrders />,
  },
  {
    key: "2",
    label: "Approved(12)",
    children: <WorksiteProductivityOrders />,
  },
  {
    key: "3",
    label: "Active(9)",
    children: <WorksiteProductivityOrders />,
  },
  {
    key: "4",
    label: "Remaining(6)",
    children: <WorksiteProductivityOrders />,
  },
];
const ProductivityOrderss = () => (
  <div className="mt-5">
    <Tabs
      className="details-tab"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </div>
);
export default ProductivityOrderss;
