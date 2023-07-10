import { SettingService } from "../../../config/axiosUrl";
import { ApiAuthorizaion } from "../../../auth/appAuth";

const CreateEditEmail = async (email) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: email?.id,
      isSave: email?.isSave,
      subject: email?.subject,
      tax_link: email?.tax_link,
      body: email?.body,
      confirmation_message: email?.confirmation_message,
      confirmation_email: email?.confirmation_email,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/email/create-edit-email-template",
      params,
      authorization
    );
    return data?.data;
  } catch (errror) {
    return errror;
  }
};

const GetEmail = async (email) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await SettingService?.get(
      "/api/v1/setting/email/get-email-template",
      { headers: authorization?.headers }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const DeleteEmail = async (email) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: email?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/email/delete-email-template",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetEmailById = async (email) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: email?.id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/email/get-email-template-by-id",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

export { CreateEditEmail, GetEmail, DeleteEmail, GetEmailById };
