const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BIZNET_API_URL_PROD : 'http://202.74.246.84:84/app_dev.php/api/v1/';

export {
  // eslint-disable-next-line import/prefer-default-export
  apiUrl,
};
