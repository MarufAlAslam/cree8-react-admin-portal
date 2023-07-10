import React, { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "../utils/routes/Main.routes";

export const AppContext = createContext();

const Main = () => {
  const [data, setData] = useState();

  return (
    <AppContext.Provider value={[data, setData]}>
      <RouterProvider router={router}></RouterProvider>
    </AppContext.Provider>
  );
};

export default Main;
