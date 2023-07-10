import { Button } from "antd";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";
import { DeleteHourlyRate } from "../../helper/setup/task/hourlyrate";
import { GetHourlyRate } from "../../helper/setup/task/hourlyrate";

const DeleteTaskModal = ({ setVisibleDelete, data, setData }) => {
  //default state value
  const initialvalues = {
    id: data?.selectedData?.id,
    name: data?.selectedData?.name,
    isLoading: false,
  };

  //states
  const [task, setTask] = useState(initialvalues);

  //functions
  const handletask = {
    delete: async () => {
      setTask({
        ...task,
        isLoading: true,
      });
      let getData = await DeleteHourlyRate(task);
      if (getData?.status) {
        let tabledata = await GetHourlyRate();
        let allData = [...data?.data];
        allData.splice(data?.selectedData?.index, 1);
        setData({
          ...data,
          data: allData,
          extra: { ...tabledata?.extra },
        });

        setTask(initialvalues);
        setVisibleDelete(false);
      } else {
        setTask({
          ...task,
          isLoading: false,
        });
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
            Are You Sure You Wish To Delete This Task
          </h2>

          <form className="mt-4">
            <div className="item mt-8">
              <table>
                <tbody>
                  <tr>
                    <td className="font-bold">Name</td>
                    <td className="pl-5">{task?.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item mt-8 text-center">
              <Button
                className="btn btn-blue bg-blue-disable w-1/5"
                disabled={task?.isLoading}
                onClick={handletask?.delete}
              >
                {task?.isLoading ? <ButtonSpinner /> : "Delete"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
