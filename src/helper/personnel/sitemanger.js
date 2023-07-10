import React from "react";
import { UserService } from "../../config/axiosUrl";
import { ApiAuthorizaion } from "../../auth/appAuth";

const CreateEditSiteManager = async (sitemanager) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      name: sitemanager?.name,
      email: sitemanager?.email,
      password: sitemanager?.password,
      cpassword: sitemanager?.cpassword,
      id: sitemanager?.id,
      role: sitemanager?.role,
      isSave: sitemanager?.isSave,
    };

    let data = await UserService?.post(
      "/api/v1/personal/site-manager/create-edit-site-manager?dev=4",
      params,
      authorization
    );

    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetSiteManager = async (sitemanager) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await UserService?.get(
      "/api/v1/personal/site-manager/get-list",
      {
        headers: authorization?.headers,
      }
    );

    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteSiteManager = async (sitemanager) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: sitemanager?.id,
    };

    let data = await UserService?.delete(
      "/api/v1/personal/delete-site-manager",
      {
        headers: authorization?.headers,
        params: params,
      }
    );

    return data?.data;
  } catch (error) {
    return error;
  }
};

export { CreateEditSiteManager, GetSiteManager, DeleteSiteManager };
