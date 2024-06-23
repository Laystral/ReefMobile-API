import { FetchUnpaidInvoices } from '../src';
import { credentials } from './_credentials';

FetchUnpaidInvoices(credentials.login!, credentials.token!).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
}).catch((error) => {
  console.error('Error:', error);
});