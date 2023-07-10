import React from "react";
import { SettingService } from "../../../config/axiosUrl";
import { ApiAuthorizaion } from "../../../auth/appAuth";

const CreateEditCategory = async (category) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      name: category?.name,
      isSave: category?.isSave,
      id: category?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/task/edit-create-categories",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetCategory = async (category) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await SettingService?.get(
      "/api/v1/setting/task/get-categories-data",
      { headers: authorization?.headers }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetCategoryById = async (category) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: category?.id,
    };

    let data = await SettingService?.get(
      "/api/v1/setting/task/get-category-data-by-id",
      { headers: authorization?.headers, params: params }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteCategory = async (category) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: category?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/task/delete-category-data?dev=4",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {}
};

export { CreateEditCategory, GetCategory, GetCategoryById, DeleteCategory };
