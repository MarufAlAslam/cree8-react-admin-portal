import { async } from "q";
import React from "react";
import { ApiAuthorizaion } from "../../auth/appAuth";

const SearchData = async (search) => {
  const authorization = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: ApiAuthorizaion(),
    },
  };

  if (search?.service) {
    try {
      const params = {
        search: search?.value,
      };
      let data = await search?.service?.get(search?.api, {
        headers: authorization?.headers,
        params: params,
      });
      return data?.data;
    } catch (error) {
      return error;
    }
  } else {
    return { status: false, message: "Service not provided" };
  }
};

const PaginationData = async (pagination) => {
  const authorization = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      Authorization: ApiAuthorizaion(),
    },
  };

  if (pagination?.service) {
    try {
      const params = {
        cursor: pagination?.cursor,
        previous: pagination?.previous,
      };

      let data = await pagination?.service?.get(pagination?.api, {
        headers: authorization?.headers,
        params: params,
      });
      return data?.data;
    } catch (error) {
      return error;
    }
  } else {
    return { status: false, message: "Service not provided" };
  }
};

export { SearchData, PaginationData };
