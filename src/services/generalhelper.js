import { message } from 'antd';
import { store } from '../redux/store';
/**
 * [get comapny id from redux store]
 * @param  {} id
 */
export function getCompany(id) {
  try {
    const { loginReducer } = store.getState();
    const companyList = loginReducer.user.company;
    // eslint-disable-next-line eqeqeq,max-len
    const result = companyList.filter((company) => (company.id * 1) === (id * 1)); // * filters the array for matching values
    return result[0]; // * there should be one result at index 0
  } catch (error) {
    return {};
  }
}

/**
 * * [Shows Alert using "antd" message object]
 * ! Requires "antd"
 */
export function showAlert() {
  try {
    // get alert data from store
    const { alertReducer } = store.getState();
    const { type, body } = alertReducer;
    switch (type) {
      case 'success':
        return message.success(body);
      case 'warning':
        return message.warning(body);
      case 'error':
        return message.error(body);
      default:
        return null;
    }
  } catch (error) {
    return null;
  }
}
