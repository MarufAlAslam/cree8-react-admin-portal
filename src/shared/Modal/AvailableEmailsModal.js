import { Checkbox, List } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { GetEmail } from "../../helper/setup/induction/email";
import { SearchData } from "../../helper/global/global";
import { SettingService } from "../../config/axiosUrl";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { ButtonSpinner } from "../../components/spinners";

const AvailableEmailModal = ({ setVisibleEdit, handle, company }) => {
  //default state vlaue
  const initialvalue = {
    data: [],
    search: "",
    isLoading: false,
    isShimmer: true,
  };

  //states
  const [email, setEmail] = useState(initialvalue);

  //refs
  let search = useRef();

  //functions
  const handleEmail = {
    search: async (e) => {
      const params = {
        value: e?.target?.value,
        service: SettingService,
        api: "/api/v1/setting/email/get-email-template",
      };
      let data = await SearchData(params);
      setEmail({
        ...email,
        data: [...data?.data?.data],
      });
    },
  };

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

  useEffect(() => {
    (async () => {
      let data = await GetEmail();
      console.log(data);
      setEmail({
        ...email,
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

        {email?.isShimmer ? (
          <TextShimmer data={{ gap: 15, line: 15 }} />
        ) : (
          <>
            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">Available Emails</h2>

              <div className="mt-5">
                {/* <CustomTreeSelect /> */}
                <div className="mb-5">
                  <div className="border border-[#111111] flex items-center p-1 rounded-md w-full  my-2 bg-white">
                    <FaSearch className="ml-2" />{" "}
                    <input
                      placeholder="Search by Email"
                      className="h-[31px] bg-transparent text-sm w-full px-2"
                      ref={search}
                      onChange={handleEmail?.search}
                    />
                  </div>
                </div>
                <div className="border divide-y rounded-md">
                  {email?.data?.map((email, index) => {
                    return (
                      <>
                        <div
                          className="px-6 py-2 hover:bg-slate-100 cursor-pointer"
                          key={index}
                          onClick={() => handle?.selectEmail(email, index)}
                        >
                          {company?.selectedIndex == index ? (
                            <ButtonSpinner />
                          ) : (
                            email?.subject
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
                {/*  <List
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

export default AvailableEmailModal;
