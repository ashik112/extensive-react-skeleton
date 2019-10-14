import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import CardHeaderTitle from '../../../views/atoms/CardHeaderTitle';

class CompanyCreatePage extends Component {
  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <Card
        className="card-header-primary"
        size="small"
        title={<CardHeaderTitle title="Create Company"><Icon type="plus-square" /></CardHeaderTitle>}
      >
        sd
      </Card>
    );
  }
}

export default CompanyCreatePage;
