import React, { useEffect, useState, useRef, useContext } from "react";
import CompanyTable from "../../../shared/DataTable/CompanyTable";
import { FaSearch } from "react-icons/fa";
import { CompanySetupCreate } from "../../../helper/setup/induction/company";
import { GetCompany } from "../../../helper/setup/induction/company";
import { SettingService } from "../../../config/axiosUrl";
import { SearchData } from "../../../helper/global/global";
import { TablePagination } from "../../../components/pagination/pagination";
import { TextShimmer } from "../../../components/shimmer/shimmer";
import { CreateAdminContext } from "../../../layouts/SettingsLayout";

const Companies = () => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state values
  const initialvalue = {
    data: [],
    selectedCompany: {},
    trigger: false,
    extra: {},
    pagination: {
      service: SettingService,
      api: "/api/v1/setting/company/get-company-data",
    },
    isShimmer: true,
    selectedIndex: null,
  };

  //states
  const [company, setCompany] = useState(initialvalue);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [configModalVisible, setConfigModalVisible] = React.useState(false);

  //refs
  let search = useRef();

  //function
  const handleEmail = {
    selectEmail: async (email, index) => {
      setCompany({
        ...company,
        selectedIndex: index,
      });
      const params = {
        id: company?.selectedCompany?.id,
        type: "EMAIL_TEMPLATE",
        email_template_id: email?.id,
      };
      let data = await CompanySetupCreate(params);
      if (data?.status) {
        setCompany({
          ...company,
          trigger: true,
          selectedIndex: null,
        });
        setModalVisible(false);
      }
    },
    selectDisclaimer: async (dislaimer, index) => {
      setCompany({
        ...company,
        selectedIndex: index,
      });
      const params = {
        id: company?.selectedCompany?.id,
        type: "DISCLAIMER",
        disclaimer_id: dislaimer?.id,
      };
      console.log(params);
      let data = await CompanySetupCreate(params);
      if (data?.status) {
        setCompany({
          ...company,
          trigger: true,
          selectedIndex: null,
        });
        setConfigModalVisible(false);
      }
    },
    search: async (e) => {
      const params = {
        value: e?.target?.value,
        service: SettingService,
        api: "/api/v1/setting/company/get-company-data",
      };
      let data = await SearchData(params);
      if (data?.status) {
        setCompany({
          ...company,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  const EmailModalVisible = (getcompany) => {
    console.log(getcompany);
    setCompany({
      ...company,
      selectedCompany: { ...getcompany },
    });
    setModalVisible(true);
  };

  const ConfigModalVisible = (getcompany) => {
    setCompany({
      ...company,
      selectedCompany: { ...getcompany },
    });
    setConfigModalVisible(true);
  };

  useEffect(() => {
    (async () => {
      let data = await GetCompany();
      console.log(data);
      if (data?.status) {
        setCompany({
          ...company,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
          trigger: false,
          isShimmer: false,
        });
        setTimeout(() => {
          search.current.focus();
        }, 100);
        setcreateAdminContext(false);
      }
    })();
  }, [company?.trigger, createAdmincontext]);

  return (
    <div className="p-6">
      <div className="bg-white">
        {company?.isShimmer ? (
          <div className="py-6 px-4 ">
            <TextShimmer data={{ gap: 15, line: 25 }} />
          </div>
        ) : (
          <>
            <div className="p-4">
              <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
                <FaSearch className="ml-2" />{" "}
                <input
                  placeholder="Search by Name, Worker Name, Email, Card ID"
                  className="h-[31px] bg-transparent text-sm w-full px-2"
                  ref={search}
                  onChange={handleEmail?.search}
                />
              </div>
            </div>
            <CompanyTable
              company={company}
              setCompany={setCompany}
              handleEmail={handleEmail}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              configModalVisible={configModalVisible}
              setConfigModalVisible={setConfigModalVisible}
              EmailModalVisible={EmailModalVisible}
              ConfigModalVisible={ConfigModalVisible}
            />
            <TablePagination data={company} setData={setCompany} />
          </>
        )}
      </div>
    </div>
  );
};

export default Companies;
