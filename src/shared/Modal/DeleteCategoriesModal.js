import { Button } from "antd";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { DeleteCategory } from "../../helper/setup/task/category";
import { ButtonSpinner } from "../../components/spinners";

const DeleteCategoriesModal = ({ setVisibleDelete, data, setData }) => {
  //default state value
  const initialvalue = {
    id: data?.selctedData?.id,
    name: data?.selctedData?.name,
    isLoading: false,
  };

  //state
  const [category, setCategory] = useState(initialvalue);

  let handleCategory = {
    deleteCategory: async () => {
      setCategory({
        ...category,
        isLoading: true,
      });
      let getData = await DeleteCategory(category);
      console.log(getData);
      if (getData?.status) {
        let allData = [...data?.data];
        allData?.splice(data?.selctedData?.index, 1);
        setData({
          ...data,
          data: allData,
        });
        setCategory({
          ...category,
          isLoading: false,
        });
        setVisibleDelete(false);
      } else {
        setCategory(initialvalue);
      }
    },
  };

  const closeModal = () => {
    setVisibleDelete(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="text-right">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body mt-3">
          <h2 className="text-xl font-bold">
            Are You Sure You Wish To Delete This Category?{" "}
          </h2>

          <form className="mt-4">
            <div className="item mt-8">
              <table>
                <tbody>
                  <tr>
                    <td className="font-bold">Name</td>
                    <td className="pl-5">{data?.selctedData?.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item mt-8 text-center">
              <Button
                className="btn btn-blue bg-blue-disable w-1/5"
                onClick={handleCategory?.deleteCategory}
                disabled={category?.isLoading}
              >
                {category?.isLoading ? <ButtonSpinner /> : "Delete"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoriesModal;
