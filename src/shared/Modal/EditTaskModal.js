import { Button, Input, Select } from "antd";
import React, { useContext, useState, useEffect, useRef } from "react";
import { CreateAdminContext } from "../../layouts/SettingsLayout";
import { FaTimes } from "react-icons/fa";
import { SettingService } from "../../config/axiosUrl";
import { SearchData } from "../../helper/global/global";
import { GetCategory } from "../../helper/setup/task/category";
import { CreateEditRate } from "../../helper/setup/task/hourlyrate";
import { ButtonSpinner } from "../../components/spinners";
import { TextShimmer } from "../../components/shimmer/shimmer";

const EditTaskModal = ({ setVisibleEdit, data }) => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state value
  const initialvalue = {
    id: data?.selectedData?.id,
    categories: [],
    isSave: 0,
    selectedCategory: data?.selectedData?.categories?.id,
    name: data?.selectedData?.name,
    abbraviation: data?.selectedData?.abbreviation,
    errors: {
      selectedCategory: "",
      name: "",
      abbraviation: "",
    },
    isLoading: false,
    isShimmer: true,
  };

  //states
  const [task, setTask] = useState(initialvalue);

  //refs
  let category = useRef();
  let name = useRef();
  let abbraviation = useRef();

  //functions
  const handleTask = {
    getTask: (e) => {
      setTask({
        ...task,
        [e?.target?.name]: e?.target?.value,
      });
    },
    searchCategory: async (e) => {
      const params = {
        value: e,
        api: "/api/v1/setting/task/get-categories-data",
        service: SettingService,
      };
      let getdata;
      if (e?.length > 0) {
        getdata = await SearchData(params);
      } else {
        getdata = await GetCategory();
      }
      if (getdata?.status) {
        let allCategory = [];
        getdata?.data?.data?.map((data, index) => {
          allCategory?.push({ value: data?.id, label: data?.name });
        });

        setTask({
          ...task,
          categories: allCategory,
        });
      }
    },
    getCategory: (category) => {
      setTask({
        ...task,
        selectedCategory: category,
      });
    },
    submitCreateTask: async () => {
      if (!task?.selectedCategory) {
        setTask({
          ...task,
          errors: {
            selectedCategory: "Select category",
            name: "",
            abbraviation: "",
          },
        });
        category.current.focus();
      } else if (!task?.name) {
        setTask({
          ...task,
          errors: {
            selectedCategory: "",
            name: "Enter name",
            abbraviation: "",
          },
        });
        name.current.focus();
      } else if (!task?.abbraviation) {
        setTask({
          ...task,
          errors: {
            selectedCategory: "",
            name: "",
            abbraviation: "Enter Abbraviation",
          },
        });
        abbraviation.current.focus();
      } else {
        setTask({
          ...task,
          errors: {
            selectedCategory: "",
            name: "",
            abbraviation: "",
          },
          isLoading: true,
        });

        let getdata = await CreateEditRate(task);
        if (getdata?.status) {
          setcreateAdminContext(true);
          setTask(initialvalue);
          setVisibleEdit(false);
        } else {
          setTask({
            ...task,
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
    (async () => {
      let getdata = await GetCategory();
      if (getdata?.status) {
        let allCategory = [];
        getdata?.data?.data?.map((data, index) => {
          allCategory?.push({ value: data?.id, label: data?.name });
        });
        console.log(allCategory, "allCategory");

        setTask({
          ...task,
          categories: allCategory,
          isShimmer: false,
        });
        setTimeout(() => {
          category.current.focus();
        }, 100);
      }
    })();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        {task?.isShimmer ? (
          <>
            <TextShimmer data={{ gap: 15, line: 15 }} />
          </>
        ) : (
          <>
            <div className="text-right">
              <button className="close-modal" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">Editing Task</h2>

              <div className="item mt-5">
                <label htmlFor="email">Category</label>
                <div className="pt-3">
                  <Select
                    showSearch
                    placeholder="Select Category"
                    optionFilterProp="children"
                    ref={category}
                    className="w-full"
                    status={task?.errors?.selectedCategory ? "error" : ""}
                    value={task?.selectedCategory}
                    onChange={handleTask?.getCategory}
                    onSearch={handleTask?.searchCategory}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={task?.categories}
                  />
                </div>
                {task?.errors?.selectedCategory && (
                  <p className="pt-2 text-red-600 text-sm">
                    {task?.errors?.selectedCategory}
                  </p>
                )}
              </div>

              <div className="item mt-5">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  id="name"
                  ref={name}
                  className={
                    task?.errors?.name
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="name"
                  value={task?.name}
                  onChange={handleTask?.getTask}
                />
                {task?.errors?.name && (
                  <p className="pt-2 text-red-600 text-sm">
                    {task?.errors?.name}
                  </p>
                )}
              </div>

              <div className="item mt-5">
                <label htmlFor="email">Abbraviation</label>
                <Input
                  type="text"
                  id="abbraviation"
                  ref={abbraviation}
                  className={
                    task?.errors?.abbraviation
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="abbraviation"
                  value={task?.abbraviation}
                  onChange={handleTask?.getTask}
                  onKeyPress={(e) =>
                    e?.key == "Enter" && handleTask?.submitCreateTask()
                  }
                />
                {task?.errors?.abbraviation && (
                  <p className="pt-2 text-red-600 text-sm">
                    {task?.errors?.abbraviation}
                  </p>
                )}
              </div>

              <div className="item mt-5 text-center">
                <Button
                  className="btn btn-blue bg-blue-disable w-1/4"
                  onClick={handleTask?.submitCreateTask}
                  disabled={task?.isLoading}
                >
                  {task?.isLoading ? <ButtonSpinner /> : "Save Changes"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EditTaskModal;
