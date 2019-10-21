import React, { Component } from 'react';
import {
  Form, Spin,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UnitForm from '../templates/UnitForm';
import unitActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import CardHeader from '../../../../components/Card/CardHeader';
import unitRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import ButtonBack from '../../../../views/atoms/ButtonBack';

class UnitCreatePage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { getList } = this.props;
    getList();
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
    const { loading, list } = this.props;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <ButtonBack title="Unit List" route={unitRouteLinks.list} />
          </CardHeader>
          <CardBody>
            <WrappedUnitForm list={list} unit={{ name: '', description: '' }} handleSubmit={this.handleSubmit} />
          </CardBody>
        </Card>
      </Spin>
    );
  }
}

UnitCreatePage.defaultProps = {
  loading: false,
  list: [],
  createUnit: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  getList: () => { },
};

UnitCreatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  createUnit: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.unitReducer.loading,
  list: state.unitReducer.list,
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
  getList: () => dispatch(
    unitActions.fetchUnitList(),
  ),
});

const WrappedUnitForm = Form.create({ name: 'unit_create' })(UnitForm);
export default connect(mapStateToProps, mapDispatchToProps)(UnitCreatePage);
