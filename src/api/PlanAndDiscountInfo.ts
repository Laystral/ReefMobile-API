import { FREE_HOST_WITH_ENDPOINT } from "../utils/constants";

function FetchPlanAndDiscountInfo(login: string, token: string) {
  return fetch(FREE_HOST_WITH_ENDPOINT + "/subscriber/" + login + "/offer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Production/36 CFNetwork/1559 Darwin/24.0.0",
      "Accept": "*/*",
      "servicelabel": "MobAuthLogin",
      "cookie": "X_USER_TOKEN="+token,
      "x-user-token": token
    }
  });
}

export { FetchPlanAndDiscountInfo };