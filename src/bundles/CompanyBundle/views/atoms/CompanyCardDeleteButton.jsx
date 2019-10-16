/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Popconfirm } from 'antd';
import PropTypes, {func} from 'prop-types';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import companyApiService from '../../apiServices/companyApiService';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';

function deleteCompany(id, dispatch) {
  companyApiService.deleteCompany(id, dispatch).then(() => {
    history.push(companyRouteLinks.list);
  }).catch(() => {
    /*  */
  });
}

export default function CompanyCardDeleteButton({ id, dispatch, loading }) {
  return (
    <CardButtonDelete handleConfirm={() => deleteCompany(id, dispatch)} loading={loading} />
  );
}

CompanyCardDeleteButton.propTypes = {
  loading: PropTypes.bool,
//  handleConfirm: PropTypes.func,
};

CompanyCardDeleteButton.defaultProps = {
  loading: false,
//  handleConfirm: () => {},
};
