import React, { useEffect, useState, useContext, useRef } from "react";
import TasksTable from "../../../shared/DataTable/TasksTable";
import { GetHourlyRate } from "../../../helper/setup/task/hourlyrate";
import { CreateAdminContext } from "../../../layouts/SettingsLayout";
import { TextShimmer } from "../../../components/shimmer/shimmer";
import { SettingService } from "../../../config/axiosUrl";
import { SearchData } from "../../../helper/global/global";
import { FaSearch } from "react-icons/fa";
import { TablePagination } from "../../../components/pagination/pagination";
import { TableDefaultPage } from "../../../components/default/defaultPage";
import { TableDefaultSvg } from "../../../assets/svg/tableDefaul";

const Settings = () => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //dafault state value
  const initialvalues = {
    data: [],
    selectedData: {},
    search: "",
    isShimmer: true,
    extra: {},
    pagination: {
      service: SettingService,
      api: "/api/v1/setting/task/get-hourly-rate-tasks-data",
    },
  };

  //states
  const [hourlyRates, sethourlyRates] = useState(initialvalues);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  //default page data
  let deafaulPage = {
    disclaimer: "No Hourly rate task Found",
    description: "Create Your First Hourly rate task",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "",
  };

  const visibleEditModal = (item, index) => {
    console.log({ ...item, index: index });
    setVisibleEdit(true);
    sethourlyRates({
      ...hourlyRates,
      selectedData: { ...item, index: index },
    });
  };

  //refs
  let search = useRef();

  //functions
  const handleHourlyRate = {
    search: async (e) => {
      sethourlyRates({
        ...hourlyRates,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        service: SettingService,
        api: "/api/v1/setting/task/get-hourly-rate-tasks-data",
      };
      let data = await SearchData(params);
      if (data?.status) {
        sethourlyRates({
          ...hourlyRates,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  const visibleDeleteModal = (item, index) => {
    setVisibleDelete(true);
    sethourlyRates({
      ...hourlyRates,
      selectedData: { ...item, index: index },
    });
  };

  useEffect(() => {
    (async () => {
      let getdata = await GetHourlyRate();
      if (getdata?.status) {
        sethourlyRates({
          ...hourlyRates,
          data: [...getdata?.data?.data],
          extra: { ...getdata?.extra },
          isShimmer: false,
        });
        setcreateAdminContext(false);
      }
    })();
  }, [createAdmincontext]);

  return (
    <div className="p-6">
      <div className="pt-4 bg-white">
        {hourlyRates?.isShimmer ? (
          <div className="py-6 px-4 ">
            <TextShimmer data={{ gap: 15, line: 20 }} />
          </div>
        ) : (
          <>
            {!hourlyRates?.data?.length > 0 && !hourlyRates?.search ? (
              <TableDefaultPage data={deafaulPage} />
            ) : (
              <>
                <div>
                  <div className="bg-white p-4">
                    <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/4">
                      <FaSearch className="ml-2" />{" "}
                      <input
                        placeholder="Search by Induction Email Name"
                        className="h-[31px] bg-transparent text-sm w-full px-2"
                        ref={search}
                        name="search"
                        onChange={handleHourlyRate?.search}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <TasksTable
                    data={hourlyRates}
                    setData={sethourlyRates}
                    visibleEditModal={visibleEditModal}
                    visibleDeleteModal={visibleDeleteModal}
                    visibleEdit={visibleEdit}
                    setVisibleEdit={setVisibleEdit}
                    visibleDelete={visibleDelete}
                    setVisibleDelete={setVisibleDelete}
                  />
                  <TablePagination
                    data={hourlyRates}
                    setData={sethourlyRates}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
