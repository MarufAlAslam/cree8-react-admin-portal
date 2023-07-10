import { Button } from "antd";
import { async } from "q";
import React, { useState } from "react";
import { UserService } from "../../config/axiosUrl";
import { PaginationData } from "../../helper/global/global";
import { ButtonSpinner } from "../spinners";

const TablePagination = ({ data, setData }) => {
  //default state values
  const initialvalue = {
    dataPerpage: 10,
    totalData: data?.extra?.totalItems,
    showingStart: 1,
    showingEnd: 10,
    previousPage: 1,
    nextPage: data?.extra?.pageCounts,
    cursor: data?.extra?.cursor,
    api: data?.pagination?.api,
    service: data?.pagination?.service,
    isLoadingnext: false,
    isLoadingprevious: false,
  };

  //states
  const [pagination, setPagination] = useState(initialvalue);

  //functions
  const handlePagination = {
    nextPage: async () => {
      console.log("here");
      setPagination({
        ...pagination,
        isLoadingnext: true,
      });
      console.log(data?.pagination?.api);
      const params = {
        cursor: data?.extra?.cursor,
        api: pagination?.api,
        service: pagination?.service,
      };
      let getData = await PaginationData(params);
      console.log(getData);
      if (getData?.status) {
        setData({
          ...data,
          data: [...getData?.data?.data],
          extra: { ...getData?.extra },
        });
        setPagination({
          ...pagination,
          previousPage: pagination?.previousPage + 1,
          showingStart: pagination?.showingStart + pagination?.dataPerpage,
          showingEnd: pagination?.showingEnd + pagination?.dataPerpage,
          isLoadingnext: false,
        });
      } else {
        setPagination({
          ...pagination,
          isLoadingnext: false,
        });
      }
    },
    previousPage: async () => {
      setPagination({
        ...pagination,
        isLoadingprevious: true,
      });
      const params = {
        cursor: data?.extra?.cursor,
        api: pagination?.api,
        service: pagination?.service,
        previous: pagination?.previousPage,
      };
      let getData = await PaginationData(params);
      if (getData?.status) {
        setData({
          ...data,
          data: [...getData?.data?.data],
          extra: { ...getData?.extra },
        });
        setPagination({
          ...pagination,
          previousPage: pagination?.previousPage - 1,
          showingStart: pagination?.showingStart - pagination?.dataPerpage,
          showingEnd: pagination?.showingEnd - getData?.data?.data?.length,
          isLoadingprevious: false,
        });
      } else {
        setPagination({
          ...pagination,
          isLoadingprevious: false,
        });
      }
    },
  };

  return (
    <div className="flex p-2 justify-between w-full">
      <div className="text-slate-600">
        Showing : {pagination?.showingStart}-{pagination?.showingEnd} results of{" "}
        {data?.extra?.totalItems}
      </div>
      <div>
        <div>
          <Button
            className="border-0 no-color-disable"
            disabled={pagination?.previousPage <= 1 ? true : false}
            onClick={handlePagination?.previousPage}
          >
            {pagination?.isLoadingprevious ? (
              <div className="px-3">
                <ButtonSpinner />
              </div>
            ) : (
              <div className="text-base"> {"< "} Previous | &nbsp;</div>
            )}
          </Button>

          <span className="px-1">
            {pagination?.previousPage} &nbsp; out of &nbsp;{" "}
            {data?.extra?.pageCounts}
          </span>

          <Button
            className="border-0 no-color-disable"
            disabled={
              pagination?.previousPage == data?.extra?.pageCounts ? true : false
            }
            onClick={handlePagination?.nextPage}
          >
            {pagination?.isLoadingnext ? (
              <div className="px-3">
                <ButtonSpinner />
              </div>
            ) : (
              <div className="text-base"> | Next {" >"}</div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { TablePagination };
