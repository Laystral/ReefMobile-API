import { credentials } from "./_credentials";
import { VerifySMSCode } from "../src";


VerifySMSCode(credentials.OtpID!, "Code SMS", false, credentials.token!).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
}
).catch((error) => {
  console.error('Error:', error);
}
);


