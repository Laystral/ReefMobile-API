import { credentials } from "./_credentials";
import { LoginWithoutTrustedUuid } from "../src";

LoginWithoutTrustedUuid(credentials.login!, credentials.password!).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
}).catch((error) => {
  console.error('Error:', error);
});


