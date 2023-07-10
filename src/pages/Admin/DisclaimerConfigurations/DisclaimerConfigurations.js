import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InductionDisclaimerTable from "../../../shared/DataTable/InductionDisclaimerTable";
import { TextShimmer } from "../../../components/shimmer/shimmer";
import { SearchData } from "../../../helper/global/global";
import { SettingService } from "../../../config/axiosUrl";
import { GetDisclaimers } from "../../../helper/setup/induction/disclaimer";
import { TablePagination } from "../../../components/pagination/pagination";
import { TableDefaultPage } from "../../../components/default/defaultPage";
import { TableDefaultSvg } from "../../../assets/svg/tableDefaul";

const DisclaimerConfigurations = () => {
  //initial default values
  const initialvalue = {
    data: [],
    isShimmer: true,
    search: "",
    extra: {},
    pagination: {
      service: SettingService,
      api: "/api/v1/setting/disclaimer/get-disclaimer-data",
    },
  };

  //states
  const [disclaimerTable, setDisclaimerTable] = useState(initialvalue);

  //ref
  const search = useRef();

  let deafaulPage = {
    disclaimer: "No Disclaimer Configuaration Found",
    description: "Create Your First Disclaimer Configuaration",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "/admin/settings/induction/disclaimer/create",
  };

  const handleDisclaimerTable = {
    searchTableData: async (e) => {
      setDisclaimerTable({
        ...disclaimerTable,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        api: "/api/v1/setting/disclaimer/get-disclaimer-data",
        service: SettingService,
      };
      let data = await SearchData(params);
      if (data?.status) {
        setDisclaimerTable({
          ...disclaimerTable,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  useEffect(() => {
    (async () => {
      let getdata = await GetDisclaimers();
      if (getdata?.status) {
        setDisclaimerTable({
          ...disclaimerTable,
          data: [...getdata?.data?.data],
          extra: { ...getdata?.extra },
          isShimmer: false,
        });
      }
    })();
  }, []);

  return (
    <>
      <div className="p-6">
        <div className="bg-white">
          {disclaimerTable?.isShimmer ? (
            <div className="py-6 px-4 ">
              <TextShimmer data={{ gap: 15, line: 20 }} />
            </div>
          ) : (
            <>
              {!disclaimerTable?.data?.length > 0 &&
              !disclaimerTable?.search ? (
                <>
                  <TableDefaultPage data={deafaulPage} />
                </>
              ) : (
                <>
                  <div className="p-4">
                    <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
                      <FaSearch className="ml-2" />{" "}
                      <input
                        placeholder="Search by Induction Disclaimers Name"
                        className="h-[31px] bg-transparent text-sm w-full px-2"
                        ref={search}
                        name="search"
                        onChange={handleDisclaimerTable?.searchTableData}
                      />
                    </div>
                  </div>

                  <InductionDisclaimerTable
                    data={disclaimerTable}
                    setData={setDisclaimerTable}
                  />
                  <TablePagination
                    data={disclaimerTable}
                    setData={setDisclaimerTable}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DisclaimerConfigurations;
