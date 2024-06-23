import { fetchPlanAndDiscountInfo } from '../src';
import { credentials } from './_credentials';

fetchPlanAndDiscountInfo(credentials.login!, credentials.token!).then((response) => {
  return response.json();
}).then((json) => {
  console.log(json);
}).catch((error) => {
  console.error('Error:', error);
});