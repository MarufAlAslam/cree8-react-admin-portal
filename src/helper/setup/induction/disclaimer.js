import { SettingService } from "../../../config/axiosUrl";
import { ApiAuthorizaion } from "../../../auth/appAuth";

const CreateEditDisclaimer = async (disclaimer) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      name: disclaimer?.name,
      isSave: disclaimer?.isSave,
      id: disclaimer?.id,
      data: disclaimer?.data,
    };

    let data = await SettingService.post(
      "/api/v1/setting/disclaimer/create-edit-disclaimer",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetDisclaimers = async () => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await SettingService?.get(
      "api/v1/setting/disclaimer/get-disclaimer-data",
      { headers: authorization?.headers }
    );
    return data?.data;
  } catch (error) {
    return;
  }
};

const GetDisclaimersById = async (disclaimer) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: disclaimer?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/disclaimer/get-disclaimer-data-by-id",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteDisclaimer = async (disclaimer) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: disclaimer?.id,
    };

    let data = await SettingService?.post(
      "api/v1/setting/disclaimer/delete-disclaimer-data",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteDisclaimerById = async (disclaimer) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: disclaimer?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/disclaimer/delete-disclaimer-body-header-data?dev=4",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

export {
  CreateEditDisclaimer,
  GetDisclaimers,
  GetDisclaimersById,
  DeleteDisclaimer,
  DeleteDisclaimerById,
};
