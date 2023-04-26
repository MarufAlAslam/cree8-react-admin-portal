import { Button } from 'antd';
import React from 'react'

const TabBtns = ({setTabClass, toggleActiveClass}) => {
    return (
        <div className="tab-buttons flex justify-start items-center">
        <Button
          className="flex justify-center items-center p-0 mr-3 h-[42px]"
          onClick={(e) => {
            setTabClass("tab-active");
            toggleActiveClass(e);
          }}
        >
          <span className="block w-full py-3 lg:px-5 h-full btn-blue btn">Active</span>
        </Button>
        <Button
          className="flex justify-center items-center p-0 mr-3 h-[42px]"
          onClick={(e) => {
              setTabClass("tab-terminated");
              toggleActiveClass(e);
            }}
        >
          <span className="block w-full py-3 lg:px-5 h-full btn">Terminated</span>
        </Button>
        <Button
          className="flex justify-center items-center p-0 mr-3 h-[42px] oveflow-hidden"
          onClick={(e) => {
              setTabClass("tab-all");
              toggleActiveClass(e);
            }}
        >
          <span className="block w-full py-3 lg:px-5 h-full btn">All</span>
        </Button>
      </div>
    )
}

export default TabBtns