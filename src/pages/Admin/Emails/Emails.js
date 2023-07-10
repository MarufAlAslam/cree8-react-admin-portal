import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InductionEmailsTable from "../../../shared/DataTable/InductionEmailsTable";
import { DeleteEmail } from "../../../helper/setup/induction/email";
import { GetEmail } from "../../../helper/setup/induction/email";
import { TextShimmer } from "../../../components/shimmer/shimmer";
import { SettingService } from "../../../config/axiosUrl";
import { SearchData } from "../../../helper/global/global";
import { TablePagination } from "../../../components/pagination/pagination";
import { TableDefaultPage } from "../../../components/default/defaultPage";
import { TableDefaultSvg } from "../../../assets/svg/tableDefaul";

const Emails = () => {
  //default state values
  const initialvalue = {
    data: [],
    selectedData: {},
    extra: {},
    search: "",
    pagination: {
      service: SettingService,
      api: "/api/v1/setting/email/get-email-template",
    },
    isLoading: false,
    isShimmer: true,
  };

  //states
  const [email, setEmail] = useState(initialvalue);
  const [modalVisible, setModalVisible] = React.useState(false);

  let deafaulPage = {
    disclaimer: "No Email Found",
    description: "Create Your First Email",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "/admin/settings/induction/emails/create",
  };

  //refs
  let search = useRef();

  //functions
  const handleEmail = {
    deleteEmail: async () => {
      setEmail({
        ...email,
        isLoading: true,
      });
      let data = await DeleteEmail(email?.selectedData);
      if (data?.status) {
        let tableData = await GetEmail();
        if (tableData?.status) {
          setEmail({
            ...email,
            data: [...tableData?.data?.data],
            extra: { ...tableData?.extra },
            selectedData: {},
            isLoading: false,
          });
          setModalVisible(false);
        }
      } else {
        setEmail({
          ...email,
          isLoading: false,
        });
      }
    },
    search: async (e) => {
      setEmail({
        ...email,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        service: SettingService,
        api: "/api/v1/setting/email/get-email-template",
      };
      let data = await SearchData(params);
      if (data?.status) {
        setEmail({
          ...email,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  const DeleteModalVisible = (getEmail, index) => {
    setModalVisible(true);
    let emailName = email?.subject;
    setEmail({
      ...email,
      selectedData: { ...getEmail, index: index },
    });
  };

  useEffect(() => {
    (async () => {
      let data = await GetEmail();
      setEmail({
        ...email,
        data: [...data?.data?.data],
        extra: { ...data?.extra },
        isShimmer: false,
      });
    })();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white">
        {email?.isShimmer ? (
          <div className="py-6 px-4 ">
            <TextShimmer data={{ gap: 15, line: 20 }} />
          </div>
        ) : (
          <>
            {!email?.data?.length > 0 && !email?.search ? (
              <TableDefaultPage data={deafaulPage} />
            ) : (
              <>
                <div className="p-4">
                  <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
                    <FaSearch className="ml-2" />{" "}
                    <input
                      placeholder="Search by Induction Email Name"
                      className="h-[31px] bg-transparent text-sm w-full px-2"
                      name="search"
                      ref={search}
                      onChange={handleEmail?.search}
                    />
                  </div>
                </div>
                <InductionEmailsTable
                  email={email}
                  setEmail={setEmail}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  handleEmail={handleEmail}
                  DeleteModalVisible={DeleteModalVisible}
                />
                <TablePagination data={email} setData={setEmail} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Emails;
