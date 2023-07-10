import { Checkbox, List } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { GetDisclaimers } from "../../helper/setup/induction/disclaimer";
import { SettingService } from "../../config/axiosUrl";
import { SearchData } from "../../helper/global/global";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { ButtonSpinner } from "../../components/spinners";

const AvailableDisclaimerConfig = ({ setVisibleEdit, handle, company }) => {
  //default value
  const initialvalue = {
    data: [],
    search: "",
    isLoading: false,
    isShimmer: true,
  };

  //state
  const [disclaimer, setDisclaimer] = useState(initialvalue);

  //ref
  let search = useRef();

  const closeModal = () => {
    setVisibleEdit(false);
  };
  const data = [
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
  ];

  const handleDisclaimer = {
    search: async (e) => {
      const params = {
        value: e?.target?.value,
        api: "/api/v1/setting/disclaimer/get-disclaimer-data",
        service: SettingService,
      };
      let data = await SearchData(params);
      if (data?.status) {
        setDisclaimer({
          ...disclaimer,
          data: [...data?.data?.data],
        });
      }
    },
  };

  useEffect(() => {
    (async () => {
      let data = await GetDisclaimers();
      setDisclaimer({
        ...disclaimer,
        data: [...data?.data?.data],
        isShimmer: false,
      });
      setTimeout(() => {
        search.current.focus();
      }, 100);
    })();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="text-right">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        {disclaimer?.isShimmer ? (
          <TextShimmer data={{ gap: 15, line: 15 }} />
        ) : (
          <>
            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">
                Available Disclaimer Configuration
              </h2>

              <div className="mt-5">
                {/* <CustomTreeSelect /> */}
                <div className="mb-5">
                  <div className="border border-[#111111] flex items-center p-1 rounded-md w-full  my-2 bg-white">
                    <FaSearch className="ml-2" />{" "}
                    <input
                      placeholder="Search by Disclaimer Configuration Name "
                      className="h-[31px] bg-transparent text-sm w-full px-2"
                      ref={search}
                      onChange={handleDisclaimer?.search}
                    />
                  </div>
                </div>
                <div className="border divide-y rounded-md">
                  {disclaimer?.data?.map((disclaimer, index) => {
                    return (
                      <>
                        <div
                          className="px-6 py-2 hover:bg-slate-100 cursor-pointer"
                          key={index}
                          onClick={() =>
                            handle?.selectDisclaimer(disclaimer, index)
                          }
                        >
                          {company?.selectedIndex == index ? (
                            <ButtonSpinner />
                          ) : (
                            disclaimer?.name
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
                {/*   <List
              bordered
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <div className="flex w-full justify-between items-center">
                    <label className="w-full" htmlFor={`item${index}`}>
                      {item}
                    </label>
                    <Checkbox id={`item${index}`} className="ml-auto" />
                  </div>
                </List.Item>
              )}
            /> */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AvailableDisclaimerConfig;
