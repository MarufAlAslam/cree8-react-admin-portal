import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CancelSvg } from "../../../assets/svg/cancelsvg";
import { ButtonSpinner } from "../../../components/spinners";
import {
  CreateEditDisclaimer,
  DeleteDisclaimerById,
  GetDisclaimersById,
} from "../../../helper/setup/induction/disclaimer";
import { TextShimmer } from "../../../components/shimmer/shimmer";

const EditDisclaimerForm = () => {
  //naviate
  let navigate = useNavigate();

  //url params
  let { id } = useParams();

  //default state values
  const initialvalue = {
    name: "",
    errorIndex: 0,
    errors: {
      name: "",
      body: "",
      heading: "",
    },
    isSave: id ? 0 : 1,
    id: id ? id : "",
    data: [{ id: "", heading: "", body: "" }],
    isLoading: false,
    isDeleteLoad: false,
    deleteIndex: 0,
    isShimmer: true,
  };

  //states
  const [disclaimer, setDisclaimer] = useState(initialvalue);

  //ref
  let name = useRef();
  let heading = useRef([]);
  let body = useRef([]);

  //functions
  const handleDislaimer = {
    addDynamicFields: () => {
      let allData = [...disclaimer?.data];
      allData?.push({ id: "", heading: "", body: "" });
      setDisclaimer({
        ...disclaimer,
        data: allData,
      });
    },
    getDisclaimerName: (e) => {
      setDisclaimer({
        ...disclaimer,
        [e?.target?.name]: e?.target?.value,
      });
    },
    getDisclaimer: (e, index) => {
      let getAllData = [...disclaimer?.data];
      if (e.target.name == "heading") {
        getAllData[index].heading = e?.target?.value;
      } else if (e.target.name == "body") {
        getAllData[index].body = e?.target?.value;
      }

      setDisclaimer({
        ...disclaimer,
        data: getAllData,
      });
    },
    deleteDisclaimerById: async (data, index) => {
      console.log(data, index, "id");
      setDisclaimer({ ...disclaimer, isDeleteLoad: true, deleteIndex: index });
      if (data?.id != "") {
        let getdata = await DeleteDisclaimerById(data);
        console.log(getdata);
        if (getdata?.status) {
          let getAllData = [...disclaimer?.data];
          getAllData?.splice(index, 1);
          setDisclaimer({
            ...disclaimer,
            data: getAllData,
            isDeleteLoad: false,
            deleteIndex: 0,
          });
        } else {
          setDisclaimer({
            ...disclaimer,
            isDeleteLoad: false,
            deleteIndex: 0,
          });
        }
      } else {
        let getAllData = [...disclaimer?.data];
        getAllData?.splice(index, 1);
        setDisclaimer({
          ...disclaimer,
          data: getAllData,
          isDeleteLoad: false,
          deleteIndex: 0,
        });
      }
    },
    submitDisclaimer: async () => {
      let allHeadingBody = [];

      disclaimer?.data?.map((data, index) => {
        if (!data?.heading) {
          allHeadingBody?.push({ index: index, for: "Heading" });
        } else if (!data?.body) {
          allHeadingBody?.push({ index: index, for: "Body" });
        }
      });

      if (!disclaimer?.name) {
        setDisclaimer({
          ...disclaimer,
          errors: {
            name: "Enter name",
            body: "",
            heading: "",
          },
        });
        name.current.focus();
      } else if (allHeadingBody?.length > 0) {
        console.log("here");
        allHeadingBody?.map((data, index) => {
          if (index < 1) {
            if (data?.for == "Heading") {
              setDisclaimer({
                ...disclaimer,
                errorIndex: data?.index,
                errors: {
                  name: "",
                  body: "",
                  heading: "Enter Heading",
                },
              });
              setTimeout(() => {
                heading.current[data?.index].current.focus();
              }, 100);
            } else if (data?.for == "Body") {
              setDisclaimer({
                ...disclaimer,
                errorIndex: data?.index,
                errors: {
                  name: "",
                  body: "Enter Body",
                  heading: "",
                },
              });
              setTimeout(() => {
                body.current[data?.index].current.focus();
              }, 100);
            }
          }
        });
      } else {
        setDisclaimer({
          ...disclaimer,
          isLoading: true,
        });
        let data = await CreateEditDisclaimer({
          ...disclaimer,
        });
        if (data?.status) {
          navigate("/admin/settings/induction/disclaimer");
          setDisclaimer({
            ...disclaimer,
            isLoading: false,
          });
        } else {
          setDisclaimer({
            ...disclaimer,
            isLoading: false,
          });
        }
      }
    },
  };

  useEffect(() => {
    (async () => {
      console.log(disclaimer);
      if (disclaimer?.id) {
        let data = await GetDisclaimersById(disclaimer);
        if (data?.status) {
          console.log(data?.data?.data?.disclaimer_data);
          setDisclaimer({
            ...disclaimer,
            name: data?.data?.data?.name,
            data: [...data?.data?.data?.disclaimer_data],
            isSave: 0,
            isShimmer: false,
          });
        }
      } else {
        setDisclaimer({
          ...disclaimer,
          isShimmer: false,
        });
      }
      setTimeout(() => {
        name.current.focus();
      }, 100);
    })();
  }, []);

  return (
    <>
      {disclaimer?.isShimmer ? (
        <div className="lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm mt-5">
          <TextShimmer data={{ gap: 15, line: 21 }} />
        </div>
      ) : (
        <>
          <form className="mt-5">
            <div className="lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm">
              <p className="fs-18 font-bold">Induction Disclaimers </p>
              <div className="mt-5">
                <label className="block font-normal">Name</label>
                <Input
                  className={
                    disclaimer?.errors?.name
                      ? "w-full mt-4 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "w-full mt-4"
                  }
                  ref={name}
                  name="name"
                  value={disclaimer?.name}
                  onChange={handleDislaimer?.getDisclaimerName}
                />
              </div>
              {disclaimer?.errors?.name && (
                <p className="pt-2 text-red-600 text-sm">
                  {disclaimer?.errors?.name}
                </p>
              )}
            </div>

            {disclaimer?.data?.map((data, index) => {
              heading.current[index] = React.createRef();
              body.current[index] = React.createRef();
              return (
                <>
                  <div
                    className={
                      index == 0
                        ? "lg:w-1/2 mt-0 w-full mx-auto bg-white p-4"
                        : "lg:w-1/2 mt-5 w-full mx-auto bg-white p-4"
                    }
                  >
                    <div className="">
                      <div className="flex justify-between">
                        <label className="block font-normal">Heading</label>{" "}
                        <div
                          className="mt-1 cursor-pointer"
                          onClick={() =>
                            handleDislaimer?.deleteDisclaimerById(data, index)
                          }
                        >
                          {index > 0 && (
                            <>
                              {disclaimer?.isDeleteLoad &&
                              disclaimer?.deleteIndex == index ? (
                                <ButtonSpinner />
                              ) : (
                                <CancelSvg />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <Input
                        key={index}
                        ref={heading.current[index]}
                        className={
                          disclaimer?.errorIndex == index &&
                          disclaimer?.errors?.heading
                            ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                            : "w-full mt-4"
                        }
                        name="heading"
                        value={disclaimer?.data?.[index]?.heading}
                        onChange={(e) =>
                          handleDislaimer?.getDisclaimer(e, index)
                        }
                      />
                      {disclaimer?.errorIndex == index && (
                        <>
                          {disclaimer?.errors?.heading && (
                            <p className="pt-2 text-red-600 text-sm">
                              {disclaimer?.errors?.heading}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    <div className="mt-5">
                      <label className="block font-normal">Body</label>
                      <TextArea
                        rows={10}
                        className={
                          disclaimer?.errorIndex == index &&
                          disclaimer?.errors?.body
                            ? "w-full mt-4 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                            : "w-full mt-4"
                        }
                        key={index}
                        ref={body.current[index]}
                        name="body"
                        value={disclaimer?.data?.[index]?.body}
                        onChange={(e) =>
                          handleDislaimer?.getDisclaimer(e, index)
                        }
                      />
                      {disclaimer?.errorIndex == index && (
                        <>
                          {disclaimer?.errors?.body && (
                            <p className="pt-2 text-red-600 text-sm">
                              {disclaimer?.errors?.body}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </>
              );
            })}

            <div className="lg:w-1/2 w-full mx-auto bg-transparent py-5 flex justify-center">
              <div className="text-center ">
                <Button
                  onClick={handleDislaimer?.addDynamicFields}
                  className="btn-blue text-white h-[40px] mx-auto  justify-center items-center cursor-pointer"
                >
                  <FaPlusCircle />
                </Button>
              </div>
              <div className="px-2 cursor-pointer">
                <Button
                  onClick={handleDislaimer?.submitDisclaimer}
                  className="btn-blue text-white h-[40px]  mx-auto float-end w-full  items-center bg-blue-disable"
                  disabled={disclaimer?.isLoading}
                >
                  {disclaimer?.isLoading ? (
                    <div className="px-2">
                      <ButtonSpinner />
                    </div>
                  ) : disclaimer?.id ? (
                    "Update"
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default EditDisclaimerForm;
