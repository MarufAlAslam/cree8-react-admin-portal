import { SettingService } from "../../../config/axiosUrl";
import { ApiAuthorizaion } from "../../../auth/appAuth";

const CreateCompany = async (company) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      name: company?.name,
      email: company?.email,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/company/create-company",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const GetCompany = async (company) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    let data = await SettingService?.get(
      "/api/v1/setting/company/get-company-data",
      {
        headers: authorization?.headers,
      }
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

const CompanySetupCreate = async (setup) => {
  try {
    const authorization = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: ApiAuthorizaion(),
      },
    };

    const params = {
      id: setup?.id,
      type: setup?.type,
      email_template_id: setup?.email_template_id,
      disclaimer_id: setup?.disclaimer_id,
    };

    let data = await SettingService?.post(
      "/api/v1/setting/company/update-company-email-disclaimer",
      params,
      authorization
    );
    return data?.data;
  } catch (error) {
    return error;
  }
};

export { CreateCompany, GetCompany, CompanySetupCreate };
