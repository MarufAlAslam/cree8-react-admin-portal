import { Tabs } from "antd";
import RestoredTable from "../../../../../../shared/DataTable/restoredTable";
import WorkingTable from "../../../../../../shared/DataTable/workingTable";
import CompletedTable from "../../../../../../shared/DataTable/completedTable";
import ConfirmedTable from "../../../../../../shared/DataTable/confirmedTable";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Rostered (8)",
    children: <RestoredTable />,
  },
  {
    key: "2",
    label: "Working (2)",
    children: <WorkingTable/>,
  },
  {
    key: "3",
    label: "Completed (0)",
    children: <CompletedTable/>,
  },
  {
    key: "4",
    label: "Confirmed",
    children: <ConfirmedTable/>,
  },
];
const Timesheets = () => (
  <Tabs
    className="details-tab"
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
  />
);
export default Timesheets;
