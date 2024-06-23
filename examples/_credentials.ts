import { config } from "dotenv";
import { join } from "node:path";
// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

// Export the credentials.
export const credentials = {
  login: process.env.LOGIN,
  password: process.env.PASSWORD,
  trustedUuid: process.env.TRUSTEDUUID,
  smscode: process.env.SMSCODE,
  token: process.env.TOKEN,
  OtpID: process.env.OTPID,
};
