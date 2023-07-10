import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteDisclaimerModal from "../Modal/DeleteDisclaimerModal";
import {
  DeleteDisclaimer,
  GetDisclaimers,
} from "../../helper/setup/induction/disclaimer";

const InductionDisclaimerTable = ({ data, setData }) => {
  //defaul state values
  const initialvalue = {
    data: [],
    selectedData: {},
    isLoading: false,
  };

  //states
  const [disclaimerTable, setDisclaimerTable] = useState(initialvalue);

  //functions
  const handleDisclaimerTable = {
    deleteData: async () => {
      setDisclaimerTable({
        ...disclaimerTable,
        isLoading: true,
      });
      const params = {
        id: disclaimerTable?.selectedData?.id,
      };
      let getData = await DeleteDisclaimer(params);
      console.log(data);
      if (getData?.status) {
        let tabledata = await GetDisclaimers();
        if (tabledata?.status) {
          setData({
            ...data,
            data: [...tabledata?.data?.data],
            extra: { ...tabledata?.extra },
          });
          setModalVisible(false);
          setDisclaimerTable(initialvalue);
        }
      }
    },
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

  const DeleteModalVisible = (item, index) => {
    setModalVisible(true);
    setDisclaimerTable({
      ...disclaimerTable,
      selectedData: { ...item, index: index },
    });
  };

  return (
    <>
      {!data?.isShimmer && (
        <>
          {modalVisible && (
            <DeleteDisclaimerModal
              setVisibleDelete={setModalVisible}
              data={disclaimerTable}
              handle={handleDisclaimerTable}
            />
          )}
          <table className="w-full">
            <thead className="bg-[#E8F3FF] text-center">
              <tr className="text-left">
                <th className=" px-4 py-3 ">
                  <div className="flex items-center justify-start">
                    Induction Disclaimers Name
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
              {data?.data?.map((item, index) => (
                <tr key={index} className="border-b border-[#F0F0F0]">
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-start">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center">
                      <Link
                        to={`/admin/settings/induction/disclaimer/edit/${item?.id}`}
                        className="mx-2"
                      >
                        <FaEdit />
                      </Link>
                      {/*   <button
                        className="mx-2"
                        onClick={() => {
                          handleDisclaimerTable?.deleteData(item, index);
                        }}
                      > */}
                      <FaTrashAlt
                        onClick={() => DeleteModalVisible(item, index)}
                      />
                      {/*  </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default InductionDisclaimerTable;
