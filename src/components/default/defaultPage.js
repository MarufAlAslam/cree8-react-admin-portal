import { Button } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TableDefaultSvg } from "../../assets/svg/tableDefaul";
import CreateNewTaskModal from "../../shared/Modal/CreateNewTaskModal";
import CreateNewCategoryModal from "../../shared/Modal/CreateNewCategoryModal";
import CreateAdminDetailsModal from "../../shared/Modal/CreateAdminDetailsModal";
import AddNewSiteManagerModal from "../../shared/Modal/AddNewSiteManagerModal";

const TableDefaultPage = ({ data }) => {
  //get route
  let location = useLocation();

  //redirect
  let navigate = useNavigate();

  //default state values
  const initialvalues = {
    disclaimer: data?.disclaimer,
    description: data?.description,
    buttonText: data?.buttonText,
    svg: data?.svg,
    redirect: data?.redirect,
    data: data?.data,
    setData: data?.setData,
    handle: data?.handle,
  };

  //states
  const [tableDefault, setTableDefault] = useState(initialvalues);
  const [visibleCreate, setVisibleCreate] = React.useState(false);
  const [createCategory, setCreateCategory] = React.useState(false);
  const [createAdmin, setCreateAdmin] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  //functions
  const handleTableDefault = {
    redirect: () => {
      if (location?.pathname == "/admin/settings/hourly-rate-tasks") {
        setVisibleCreate(true);
      } else if (location?.pathname == "/admin/settings/categories") {
        setCreateCategory(true);
      } else if (location?.pathname == "/admin/settings/users/admin") {
        setCreateAdmin(true);
      } else if (location?.pathname == "/admin/personnel/site-managers") {
        setVisible(true);
      } else {
        navigate(data?.redirect);
      }
    },
  };

  return (
    <>
      {visibleCreate && (
        <CreateNewTaskModal setVisibleCreate={setVisibleCreate} />
      )}

      {createCategory && (
        <CreateNewCategoryModal setCreateCategory={setCreateCategory} />
      )}

      {createAdmin && (
        <CreateAdminDetailsModal setCreateAdmin={setCreateAdmin} />
      )}

      {visible && (
        <AddNewSiteManagerModal
          setVisible={setVisible}
          data={tableDefault?.data}
          setData={tableDefault?.setData}
        />
      )}

      <div className="h-full-80 flex justify-center items-center flex-col bg-white">
        <div className="py-2">{tableDefault?.svg}</div>
        <div className="">{tableDefault?.disclaimer}</div>
        <div className="text-gray-300 text-base py-2">
          {tableDefault?.description}
        </div>
        <div className="pt-2">
          <Button className="btn-blue" onClick={handleTableDefault?.redirect}>
            {data?.buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export { TableDefaultPage };
