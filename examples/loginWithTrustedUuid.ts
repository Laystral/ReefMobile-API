import { credentials } from "./_credentials";
import { LoginWithTrustedUuid } from "../src";


LoginWithTrustedUuid(credentials.login!, credentials.password!, credentials.trustedUuid!).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
}).catch((error) => {
  console.error('Error:', error);
});


