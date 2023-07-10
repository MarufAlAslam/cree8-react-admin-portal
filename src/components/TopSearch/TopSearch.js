import { TreeSelect } from "antd";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const treeData = [
  {
    value: "Personnel",
    title: "Personnel",
    children: [
      {
        value: "Workers",
        title: "Workers",
      },
      {
        value: "Worker History",
        title: "Worker History",
      },
    ],
  },
  {
    value: "Worksite",
    title: "Worksite",
    children: [
      {
        value: "Worksites",
        title: "Worksites",
      },
      {
        value: "Active Worksite",
        title: "Active Worksite",
      },
    ],
  },
  {
    value: "Payroll",
    title: "Payroll",
    children: [
      {
        value: "Worksite Payroll Categories",
        title: "Worksite Payroll Categories",
      },
      {
        value: "Worksite Task Categories",
        title: "Worksite Task Categories",
      },
    ],
  },
];
const TopSearch = ({setVisibleSearch}) => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onClose = () => {
    setVisibleSearch(false);
    };
  return (
    <div className="flex bg-white rounded-md">
      <TreeSelect
        showSearch
        className="border-none"
        style={{
          width: "100%",
          border: "none",
        }}
        value={value}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder="Enter the Needed Search Term here"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
      <button onClick={onClose}>
        <FaTimes className="mx-3 text-black"/>
      </button>
    </div>
  );
};
export default TopSearch;
