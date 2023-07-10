import React, { useEffect, useState } from "react";
import TopSearchBarManagers from "../../../../shared/Workers/TopSearchBarManagers";
import SiteManagerTable from "../../../../shared/DataTable/SiteManagersTable";
import { GetSiteManager } from "../../../../helper/personnel/sitemanger";
import { TableDefaultPage } from "../../../../components/default/defaultPage";
import { TableDefaultSvg } from "../../../../assets/svg/tableDefaul";
import { TextShimmer } from "../../../../components/shimmer/shimmer";
import { SearchData } from "../../../../helper/global/global";
import { UserService } from "../../../../config/axiosUrl";
import { TablePagination } from "../../../../components/pagination/pagination";

const SiteManagers = () => {
  //default state values
  const initialvalues = {
    data: [],
    extra: {},
    search: "",
    selectedData: {},
    errors: {
      name: "",
      email: "",
    },
    isLoading: false,
    isShimmer: true,
  };

  //states
  const [siteManager, setSiteManager] = useState(initialvalues);

  //fuinctions
  const handleSiteManager = {
    search: async (e) => {
      setSiteManager({
        ...siteManager,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        service: UserService,
        api: "/api/v1/personal/site-manager/get-list",
      };
      let data = await SearchData(params);
      if (data?.status) {
        setSiteManager({
          ...siteManager,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  //default page data
  let deafaulPage = {
    disclaimer: "No Site Manager Found",
    description: "Create Your First Site Manager",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "",
    data: siteManager,
    setData: setSiteManager,
    handle: handleSiteManager,
  };

  useEffect(() => {
    (async () => {
      let data = await GetSiteManager();
      if (data?.status) {
        console.log(data, "Here");
        setSiteManager({
          ...siteManager,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
          isShimmer: false,
        });
      }
    })();
  }, []);

  return (
    <div className="p-6">
      {siteManager?.isShimmer ? (
        <div className="py-6 px-4 bg-white">
          <TextShimmer data={{ gap: 15, line: 20 }} />
        </div>
      ) : (
        <>
          {!siteManager?.data?.length > 0 && !siteManager?.search ? (
            <>
              <TableDefaultPage data={deafaulPage} />
            </>
          ) : (
            <>
              <TopSearchBarManagers
                data={siteManager}
                setData={setSiteManager}
                handle={handleSiteManager}
              />

              <div className="bg-white">
                <div className="text-right text-sm px-6 py-4">
                  <span>Total Number of Site Managers:</span>
                  &nbsp; {siteManager?.extra?.totalItems}
                </div>
                <SiteManagerTable
                  data={siteManager}
                  setData={setSiteManager}
                  handle={handleSiteManager}
                />
                <TablePagination data={siteManager} setData={setSiteManager} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SiteManagers;
