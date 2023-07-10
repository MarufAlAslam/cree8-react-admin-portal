import { Button, Input } from "antd";
import React, { useEffect, useRef, useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";
import { CreateEditCategory } from "../../helper/setup/task/category";
import { CreateAdminContext } from "../../layouts/SettingsLayout";

const CreateNewCategoryModal = ({ setCreateCategory }) => {
  //contex
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state value
  const initialvalue = {
    name: "",
    isSave: 1,
    errors: {
      name: "",
    },
    isLoading: false,
  };

  //state
  const [category, setCategory] = useState(initialvalue);

  //refs
  let name = useRef();

  //functions
  let handleCategory = {
    getCategory: (e) => {
      setCategory({
        ...category,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitCategory: async () => {
      if (!category?.name) {
        setCategory({
          ...category,
          errors: {
            name: "Enter name",
          },
        });
      } else {
        setCategory({
          ...category,
          isLoading: true,
          errors: {
            name: "",
          },
        });
        let data = await CreateEditCategory(category);
        console.log(data, "Category");
        if (data?.status) {
          setcreateAdminContext(true);
          setCategory(initialvalue);
          setCreateCategory(false);
        } else {
          setCategory({
            ...category,
            isLoading: false,
          });
        }
      }
    },
  };

  const closeModal = () => {
    setCreateCategory(false);
  };

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        name.current.focus();
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

        <div className="modal-body mt-3">
          <h2 className="text-xl font-bold">Creating Task Categorys</h2>

          <div className="item mt-5">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              ref={name}
              className={
                category?.errors?.name
                  ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                  : "mt-3"
              }
              name="name"
              value={category?.name}
              onChange={handleCategory?.getCategory}
              onKeyPress={(e) =>
                e?.key == "Enter" && handleCategory?.submitCategory()
              }
            />
            {category?.errors?.name && (
              <p className="pt-2 text-red-600 text-sm">
                {category?.errors?.name}
              </p>
            )}
          </div>
          <div className="item mt-5 text-center">
            <Button
              className="btn btn-blue bg-blue-disable w-1/5"
              onClick={handleCategory?.submitCategory}
              disabled={category?.isLoading}
            >
              {category?.isLoading ? <ButtonSpinner /> : "Create"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCategoryModal;
