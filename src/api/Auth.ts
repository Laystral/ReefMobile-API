import { FREE_HOST_WITH_ENDPOINT } from "../utils/constants";

function LoginWithoutTrustedUuid(login: string, password: string) {
  const body = {
    password: password,
    login: login,
  };
  return fetch(FREE_HOST_WITH_ENDPOINT + "/auth/customer/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Production/36 CFNetwork/1559 Darwin/24.0.0",
      "Accept": "*/*",
      "servicelabel": "MobAuthLogin"
    },
    body: JSON.stringify(body)
  });
}

function LoginWithTrustedUuid(login: string, password: string, trustedUuid: string) {
  const body = {
    password: password,
    trustedUuid: trustedUuid,
    login: login,
  };
  return fetch(FREE_HOST_WITH_ENDPOINT + "/auth/customer/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Production/36 CFNetwork/1559 Darwin/24.0.0",
      "Accept": "*/*",
      "servicelabel": "MobAuthLogin"
    },
    body: JSON.stringify(body)
  });
}

function VerifySMSCode(otpID: string, codeOtp: string, isTrusted: boolean, token: string) {+
  console.log(FREE_HOST_WITH_ENDPOINT + "/auth/customer/otp/validate/" + otpID);
  const body = {
    codeOtp: codeOtp,
    isTrusted: isTrusted
  };
  return fetch(FREE_HOST_WITH_ENDPOINT + "/auth/customer/otp/validate/" + otpID, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Production/36 CFNetwork/1559 Darwin/24.0.0",
      "Accept": "*/*",
      "servicelabel": "MobAuthLogin",
      "cookie": "X_USER_TOKEN="+token,
      "x-user-token": token
    },
    body: JSON.stringify(body)
  });
}

export { LoginWithoutTrustedUuid, LoginWithTrustedUuid, VerifySMSCode };

