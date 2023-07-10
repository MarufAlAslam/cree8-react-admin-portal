import React, { useEffect, useState, useContext, useRef } from "react";
import { BiHistory } from "react-icons/bi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditAdminModal from "../Modal/EditAdminModal";
import DeleteAdminModal from "../Modal/DeleteAdminModal";
import {
  GetAdministratorDetails,
  HandleAdministrator,
  DeleteAdministratorDetails,
} from "../../helper/setup/user/administrator";
import { CreateAdminContext } from "../../layouts/SettingsLayout";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { TablePagination } from "../../components/pagination/pagination";
import { FaSearch } from "react-icons/fa";
import { SearchData } from "../../helper/global/global";
import { UserService } from "../../config/axiosUrl";
import { TableDefaultSvg } from "../../assets/svg/tableDefaul";
import { TableDefaultPage } from "../../components/default/defaultPage";

const AdminsTable = () => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default values
  const initialvalue = {
    data: [],
    extra: {},
    id: "",
    name: "",
    email: "",
    errors: {
      name: "",
      email: "",
    },
    search: "",
    isShimmer: true,
    isModalShimmer: false,
    isEditModal: false,
    pagination: {
      api: "/api/v1/administrators/get-list",
      service: UserService,
    },
  };

  //states
  const [adminTable, setAdminTable] = useState(initialvalue);
  const [trigger, setTrigger] = useState();
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [createAdmin, setCreateAdmin] = React.useState(false);

  const visibleEditModal = (admin) => {
    setVisibleEdit(true);
    setAdminTable({
      ...adminTable,
      id: admin?.id,
      email: admin?.email,
      name: admin?.name,
      isSave: 0,
      errors: {
        name: "",
        email: "",
      },
    });
  };

  //default page data
  let deafaulPage = {
    disclaimer: "No Administrator Found",
    description: "Create Your First Administrator",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "",
  };

  //ref
  const search = useRef();

  //functions
  const handleAdminTable = {
    getTableData: async () => {
      let getdata = await GetAdministratorDetails();
      setAdminTable({
        ...adminTable,
        data: [...getdata?.data?.data],
      });
    },
    getAdminEdit: (e) => {
      setAdminTable({
        ...adminTable,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitEditDeleteAdmin: async () => {
      if (adminTable?.isSave == 0) {
        if (adminTable?.name == "") {
          setAdminTable({
            ...adminTable,
            errors: {
              name: "Enter name",
              email: "",
            },
          });
        } else if (adminTable?.email == "") {
          setAdminTable({
            ...adminTable,
            errors: {
              name: "",
              email: "Enter username",
            },
          });
        } else {
          setAdminTable({
            ...adminTable,
            errors: {
              name: "",
              email: "",
            },
            isEditModal: true,
          });
          let data = await HandleAdministrator(adminTable);
          let getdata = await GetAdministratorDetails();
          if (data?.status) {
            setAdminTable({
              ...adminTable,
              data: [...getdata?.data?.data],
              isModalShimmer: true,
              isEditModal: false,
            });
            setVisibleEdit(false);
          }
        }
      } else if (adminTable?.isSave == 2) {
        setAdminTable({
          ...adminTable,
          isEditModal: true,
        });
        let data = await DeleteAdministratorDetails(adminTable);
        if (data?.status) {
          let getdata = await GetAdministratorDetails();
          if (getdata?.status) {
            setAdminTable({
              ...adminTable,
              data: [...getdata?.data?.data],
              extra: { ...getdata?.extra },
              isEditModal: false,
            });
            setVisibleDelete(false);
          }
        }
      }
    },
    searchTableData: async (e) => {
      setAdminTable({
        ...adminTable,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        api: "/api/v1/administrators/get-list",
        service: UserService,
      };
      let data = await SearchData(params);
      console.log(data?.data?.data);
      if (data?.status) {
        setAdminTable({
          ...adminTable,
          data: [...data?.data?.data],
        });
      }
    },
  };

  const visibleDeleteModal = (admin) => {
    setVisibleDelete(true);
    setAdminTable({
      ...adminTable,
      id: admin?.id,
      email: admin?.email,
      name: admin?.name,
      isSave: 2,
    });
  };

  useEffect(() => {
    (async () => {
      let data = await GetAdministratorDetails();

      setAdminTable({
        ...adminTable,
        data: [...data?.data?.data],
        extra: { ...data?.extra },
        isShimmer: false,
      });
      setcreateAdminContext(false);
    })();
  }, [createAdmincontext]);

  return (
    <>
      {visibleEdit && (
        <EditAdminModal
          setVisibleEdit={setVisibleEdit}
          data={adminTable}
          handle={handleAdminTable}
        />
      )}

      {visibleDelete && (
        <DeleteAdminModal
          setVisibleDelete={setVisibleDelete}
          data={adminTable}
          handle={handleAdminTable}
        />
      )}
      <div className="">
        <div className="bg-white">
          {adminTable?.isShimmer ? (
            <>
              <div className="py-6 px-4 ">
                <TextShimmer data={{ gap: 15, line: 20 }} />
              </div>
            </>
          ) : (
            <>
              {!adminTable?.data?.length > 0 && !adminTable?.search ? (
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
                        name="search"
                        ref={search}
                        onChange={handleAdminTable?.searchTableData}
                      />
                    </div>
                  </div>

                  <table className="w-full">
                    <thead className="bg-[#E8F3FF] text-center">
                      <tr className="text-left">
                        <th className=" px-4 py-3 ">
                          <div className="flex items-center justify-start">
                            Name
                          </div>
                        </th>
                        <th className=" px-4 py-3 ">
                          <div className="flex items-center justify-center">
                            User Name
                          </div>
                        </th>
                        <th className=" px-4 py-3 ">
                          <div className="flex items-center justify-center">
                            Actions
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {adminTable?.data?.map((item, index) => (
                        <tr key={index} className="border-b border-[#F0F0F0]">
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-start">
                              {item?.name}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-center">
                              {item.email}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-center">
                              <button
                                className="mx-2"
                                onClick={() => visibleEditModal(item)}
                              >
                                <FaEdit />
                              </button>
                              <Link
                                to="/admin/settings/users/admin/history"
                                className="mx-2"
                              >
                                <BiHistory />
                              </Link>
                              <button
                                className="mx-2"
                                onClick={() => {
                                  visibleDeleteModal(item);
                                }}
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <TablePagination data={adminTable} setData={setAdminTable} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminsTable;
