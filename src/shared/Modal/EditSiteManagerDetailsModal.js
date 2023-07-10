import { Button, Input } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import {
  CreateEditSiteManager,
  GetSiteManager,
} from "../../helper/personnel/sitemanger";
import { ButtonSpinner } from "../../components/spinners";
import { TextShimmer } from "../../components/shimmer/shimmer";

const EditSiteManagerDetailsModal = ({
  setVisibleEdit,
  data,
  setData,
  handle,
}) => {
  const initialvalues = {
    id: data?.selectedData?.id,
    name: data?.selectedData?.name,
    email: data?.selectedData?.email,
    isSave: 0,
    errors: {
      name: "",
      email: "",
    },
    isLoading: false,
    isShimmer: true,
  };

  const [siteManager, setSitemanager] = useState(initialvalues);

  const name = useRef();
  const email = useRef();

  const handleSiteManager = {
    getSiteManager: (e) => {
      setSitemanager({
        ...siteManager,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitSiteManager: async () => {
      if (!siteManager?.name) {
        setSitemanager({
          ...siteManager,
          errors: {
            name: "Enter name",
            email: "",
          },
        });
        name?.current?.focus();
      } else if (!siteManager?.email) {
        setSitemanager({
          ...siteManager,
          errors: {
            name: "",
            email: "Enter email",
          },
        });
        email?.current?.focus();
      } else {
        setSitemanager({
          ...siteManager,
          errors: {
            name: "",
            email: "",
          },
          isLoading: true,
        });

        let getData = await CreateEditSiteManager(siteManager);
        if (getData?.status) {
          let tableData = await GetSiteManager();
          setData({
            ...data,
            data: [...tableData?.data?.data],
            extra: { ...tableData?.extra },
          });
          setVisibleEdit(false);
          setSitemanager(initialvalues);
        } else {
          setSitemanager({
            isLoading: false,
          });
        }
      }
    },
  };

  const closeModal = () => {
    setVisibleEdit(false);
  };

  useEffect(() => {
    if (data?.selectedData?.id) {
      setSitemanager({
        ...siteManager,
        isShimmer: false,
      });
      setTimeout(() => {
        name?.current?.focus();
      }, 100);
    }
  }, []);
  return (
    <div className="modal">
      <div className="modal-content">
        {siteManager?.isShimmer ? (
          <>
            {" "}
            <TextShimmer data={{ gap: 15, line: 12 }} />
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
                Editing The Site Managers Details
              </h2>

              <form className="mt-4">
                <div className="item mt-5">
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    id="name"
                    ref={name}
                    className={
                      siteManager?.errors?.name
                        ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                        : "mt-3"
                    }
                    name="name"
                    value={siteManager?.name}
                    onChange={handleSiteManager?.getSiteManager}
                  />
                  {siteManager?.errors?.name && (
                    <p className="pt-2 text-red-600 text-sm">
                      {siteManager?.errors?.name}
                    </p>
                  )}
                </div>
                <div className="item mt-5">
                  <label htmlFor="email">Username</label>
                  <Input
                    type="username"
                    id="username"
                    ref={email}
                    className={
                      siteManager?.errors?.email
                        ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                        : "mt-3"
                    }
                    value={siteManager?.email}
                    name="email"
                    onChange={handleSiteManager?.getSiteManager}
                    onKeyPress={(e) =>
                      e?.key == "Enter" &&
                      handleSiteManager?.submitSiteManager()
                    }
                  />
                  {siteManager?.errors?.email && (
                    <p className="pt-2 text-red-600 text-sm">
                      {siteManager?.errors?.email}
                    </p>
                  )}
                </div>
                <div className="item mt-5 text-center">
                  <Button
                    className="btn btn-blue w-1/3 bg-blue-disable"
                    disabled={siteManager?.isLoading}
                    onClick={handleSiteManager?.submitSiteManager}
                  >
                    {siteManager?.isLoading ? (
                      <ButtonSpinner />
                    ) : (
                      "Save Changes"
                    )}
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

export default EditSiteManagerDetailsModal;
