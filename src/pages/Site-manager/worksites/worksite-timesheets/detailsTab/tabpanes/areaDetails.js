import { Tabs } from "antd";
import AreaDetails1 from "../../../../../../shared/DataTable/areaDetails1Table";
import Stacked from "../../../../../Admin/Worksite/WorksiteDetails/Charts/stackedChart";
import OverflowTable from "../../../../../../shared/DataTable/OverflowTable";
import Productivity from "./productivity";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tasks",
    children: <AreaDetails1 />,
  },
  {
    key: "2",
    label: "Productivity  Order",
    children: <Productivity />,
  },
  {
    key: "3",
    label: "Tasks Overflow",
    children: (
      <>
        <Stacked />
        <div className="mt-5">
          <OverflowTable />
        </div>
      </>
    ),
  },
];
const AreaDetails = () => (
  <div className="bg-white p-5">
    <Tabs
      className="details-tab"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </div>
);
export default AreaDetails;
