import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { ButtonSpinner } from "../../components/spinners";
import {
  DeleteSiteManager,
  GetSiteManager,
} from "../../helper/personnel/sitemanger";

const DeleteSiteManagerModal = ({ setVisibleDelete, data, setData }) => {
  const initialvalues = {
    id: data?.selectedData?.id,
    name: data?.selectedData?.name,
    email: data?.selectedData?.email,
    isLoading: false,
    isShimmer: true,
  };

  const [siteManager, setSitemanager] = useState(initialvalues);

  const handleSiteManager = {
    delete: async () => {
      setSitemanager({
        ...siteManager,
        isLoading: true,
      });
      let getData = await DeleteSiteManager(siteManager);
      if (getData?.status) {
        let tableData = await GetSiteManager();
        if (tableData?.status) {
          setData({
            ...data,
            data: [...tableData?.data?.data],
            extra: { ...tableData?.extra },
          });
          setVisibleDelete(false);
          setSitemanager(initialvalues);
        }
      } else {
        setSitemanager({
          ...siteManager,
          isLoading: false,
        });
      }
    },
  };

  const closeModal = () => {
    setVisibleDelete(false);
  };

  useEffect(() => {
    if (data?.selectedData?.id) {
      setSitemanager({
        ...siteManager,
        isShimmer: false,
      });
    }
  });

  return (
    <div className="modal">
      <div className="modal-content">
        {siteManager?.isShimmer ? (
          <>
            <TextShimmer data={{ gap: 15, line: 8 }} />
          </>
        ) : (
          <>
            <div className="text-right">
              <button className="close-modal" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">
                Are You Sure You Wish To Delete This Site Manager{" "}
              </h2>

              <form className="mt-4">
                <div className="item mt-8">
                  <table>
                    <tbody>
                      <tr>
                        <td className="font-bold">Name</td>
                        <td className="pl-5">{siteManager?.name}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Username</td>
                        <td className="pl-5">{siteManager?.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="item mt-8 text-center">
                  <Button
                    className="btn btn-blue w-1/5 bg-blue-disable"
                    disabled={siteManager?.isLoading}
                    onClick={handleSiteManager?.delete}
                  >
                    {siteManager?.isLoading ? <ButtonSpinner /> : "Delete"}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteSiteManagerModal;
