import React from "react";
import { SettingService } from "../../../config/axiosUrl";
import { ApiAuthorizaion } from "../../../auth/appAuth";

const CreateEditRate = async (rate) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      name: rate?.name,
      category_id: rate?.selectedCategory,
      abbreviation: rate?.abbraviation,
      isSave: rate?.isSave,
      id: rate?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/task/edit-create-hourly-rate-tasks",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetHourlyRate = async (rate) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await SettingService?.get(
      "/api/v1/setting/task/get-hourly-rate-tasks-data",
      { headers: authorization?.headers }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetRateByID = async (rate) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: rate?.id,
    };

    let data = await SettingService?.get(
      "/api/v1/setting/task/get-hourly-rate-tasks-data-by-id",
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

const DeleteHourlyRate = async (rate) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: rate?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/task/delete-hourly-rate-tasks-data",
      params,
      authorization
    );

    return data?.data;
  } catch (error) {
    return error?.data;
  }
};

export { CreateEditRate, GetHourlyRate, GetRateByID, DeleteHourlyRate };
