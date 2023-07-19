import { Tabs } from "antd";
import ProductivityOrdersTable from "../../../../../../shared/DataTable/ProductivityOrders";
import { FaSearch } from "react-icons/fa";
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
    <div className="flex justify-between items-center mb-5">
      <div className="border border-gray-300 flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
        <FaSearch className="ml-2 text-gray-300" />{" "}
        <input
          placeholder="Search by Task or Productivity Order"
          className="h-[31px] bg-transparent text-sm w-full px-2 placeholder:text-gray-300"
        />
      </div>

      <div className="text-right">
        <button className="border border-black py-2 px-6 text-[#000] rounded-md text-sm">
         + Add Filters
        </button>
      </div>
    </div>
    <Tabs
      className="details-tab prTab"
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
    />
  </div>
);
export default Productivity;
