import React, { Component } from 'react';
import {
  Button, Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UnitForm from '../templates/UnitForm';
import unitActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';

class UnitCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    clearNotifications();
  }

  handleSubmit = async (values) => {
    const { createUnit } = this.props;
    await createUnit(values);
  };

  render() {
    const { loading } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <Button
              type="primary"
              icon="arrow-left"
              onClick={async () => {
                history.push(unitRouteLinks.list);
              }}
            >
              <span>&nbsp;Unit List</span>
            </Button>
          </CardHeader>
          <CardBody>
            <WrappedUnitForm
              unit={{
                name: '', short: '', conversionFactor: '', parent: '',
              }}
              handleSubmit={this.handleSubmit}
            />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

UnitCreatePage.defaultProps = {
  loading: false,
  createUnit: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
};

UnitCreatePage.propTypes = {
  loading: PropTypes.bool,
  createUnit: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.unitReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  createUnit: (param) => dispatch(
    unitActions.createUnit(param),
  ),
  clearStore: () => dispatch(
    unitActions.clearUnitStore(),
  ),
  clearNotifications: () => dispatch(
    notificationActions.closeAll(),
  ),
});

const WrappedUnitForm = Form.create({ name: 'unit_create' })(UnitForm);
export default connect(mapStateToProps, mapDispatchToProps)(UnitCreatePage);
