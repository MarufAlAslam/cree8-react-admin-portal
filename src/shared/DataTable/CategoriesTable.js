import React, { useEffect, useRef, useState, useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditCategoriesModal from "../Modal/EditCategoriesModal";
import DeleteCategoriesModal from "../Modal/DeleteCategoriesModal";
import { GetCategory } from "../../helper/setup/task/category";
import { CreateAdminContext } from "../../layouts/SettingsLayout";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { TableDefaultPage } from "../../components/default/defaultPage";
import { TableDefaultSvg } from "../../assets/svg/tableDefaul";
import { TablePagination } from "../../components/pagination/pagination";
import { SearchData } from "../../helper/global/global";
import { SettingService } from "../../config/axiosUrl";
import { FaSearch } from "react-icons/fa";

const CategoriesTable = () => {
  //contex
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state values
  const initialvalue = {
    data: [],
    extra: {},
    search: "",
    selctedData: [],
    isShimmer: true,
    pagination: {
      api: "/api/v1/setting/task/get-categories-data",
      service: SettingService,
    },
  };

  //states
  const [categoryTable, setCategorytable] = useState(initialvalue);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [adminInfo, setAdminInfo] = useState({});
  const visibleEditModal = (data, index) => {
    console.log(data);
    setVisibleEdit(true);
    setCategorytable({
      ...categoryTable,
      selctedData: { ...data, index: index },
    });
  };

  //default page data
  let deafaulPage = {
    disclaimer: "No categories Found",
    description: "Create Your First category",
    buttonText: "Create New",
    svg: <TableDefaultSvg />,
    redirect: "",
  };

  const handleCategortTable = {
    search: async (e) => {
      setCategorytable({
        ...categoryTable,
        [e?.target?.name]: e?.target?.value,
      });
      const params = {
        value: e?.target?.value,
        service: SettingService,
        api: "/api/v1/setting/task/get-categories-data",
      };
      let data = await SearchData(params);
      if (data?.status) {
        setCategorytable({
          ...categoryTable,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
        });
      }
    },
  };

  const visibleDeleteModal = (data, index) => {
    setVisibleDelete(true);
    setCategorytable({
      ...categoryTable,
      selctedData: { ...data, index: index },
    });
  };

  //ref
  let search = useRef();

  useEffect(() => {
    (async () => {
      let data = await GetCategory();
      if (data?.status) {
        setCategorytable({
          ...categoryTable,
          data: [...data?.data?.data],
          extra: { ...data?.extra },
          isShimmer: false,
        });
        setcreateAdminContext(false);
      }
    })();
  }, [createAdmincontext]);

  return (
    <>
      {visibleEdit && (
        <EditCategoriesModal
          setVisibleEdit={setVisibleEdit}
          data={categoryTable}
          setData={setCategorytable}
        />
      )}

      {visibleDelete && (
        <DeleteCategoriesModal
          setVisibleDelete={setVisibleDelete}
          data={categoryTable}
          setData={setCategorytable}
        />
      )}

      {categoryTable?.isShimmer ? (
        <div className="bg-white text-center py-6 px-4">
          <TextShimmer data={{ gap: 15, line: 20 }} />
        </div>
      ) : (
        <>
          {!categoryTable?.data?.length > 0 && !categoryTable?.search ? (
            <>
              <TableDefaultPage data={deafaulPage} />
            </>
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
                      onChange={handleCategortTable?.search}
                    />
                  </div>
                </div>

                <table className="w-full">
                  <thead className="bg-[#E8F3FF] text-center">
                    <tr className="text-left">
                      <th className=" px-4 py-3 ">
                        <div className="flex items-center justify-center">
                          Category Name
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
                    {categoryTable?.data?.map((item, index) => (
                      <tr key={index} className="border-b border-[#F0F0F0]">
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center cursor-pointer">
                            <button
                              className="mx-2"
                              onClick={() => visibleEditModal(item, index)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="mx-2"
                              onClick={() => {
                                visibleDeleteModal(item, index);
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
                <TablePagination
                  data={categoryTable}
                  setData={setCategorytable}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CategoriesTable;
