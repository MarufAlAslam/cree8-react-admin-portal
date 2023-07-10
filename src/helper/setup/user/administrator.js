import { ApiAuthorizaion } from "../../../auth/appAuth";
import { UserService } from "../../../config/axiosUrl";

const HandleAdministrator = async (administrator) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: administrator?.id,
      name: administrator?.name,
      email: administrator?.email,
      password: administrator?.password,
      cpassword: administrator?.confirmpassword,
      isSave: administrator?.isSave,
      employee_id: administrator?.employee_id,
      role: "ADMINISTRATOR",
    };

    let data = await UserService.post(
      "/api/v1/administrators/save-edit-administrator",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetAdministratorDetails = async () => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await UserService?.get("/api/v1/administrators/get-list", {
      headers: authorization?.headers,
    });
    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteAdministratorDetails = async (admin) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: admin?.id,
    };

    let data = await UserService?.delete(
      `/api/v1/administrators/delete-admin`,
      {
        headers: authorization?.headers,
        params: {
          id: admin?.id,
        },
      }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

export {
  HandleAdministrator,
  GetAdministratorDetails,
  DeleteAdministratorDetails,
};
