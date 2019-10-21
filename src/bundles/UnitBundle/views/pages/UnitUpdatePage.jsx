import React, { Component } from 'react';
import {
  Form, Spin, Empty, Button, Divider,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UnitForm from '../templates/UnitForm';
import unitActions from '../../redux/actions';
import notificationActions from '../../../../redux/actions/notificationActions';
import unitApiService, { unitApiRoutes } from '../../apiServices/unitApiService';
import CardHeader from '../../../../components/Card/CardHeader';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';
import CardBody from '../../../../components/Card/CardBody';
import Card from '../../../../components/Card/Card';
import CardButtonDelete from '../../../../views/atoms/CardButtonDelete';
import { serverURL } from '../../../../constants';
import ButtonBack from '../../../../views/atoms/ButtonBack';


class UnitUpdatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: null,
    };
  }

  componentDidMount() {
    try {
      const { match, dispatch, getList } = this.props;
      const { params } = match;
      if (params) {
        getList();
        unitApiService.getUnit(params.id, dispatch).then((res) => {
          this.setState({
            unit: res.data,
          });
        });
      }
    } catch (e) {
      /* */
    }
  }

  componentWillUnmount() {
    const { clearStore, clearNotifications } = this.props;
    clearStore();
    clearNotifications();
  }

  handleSubmit = (params) => {
    const { updateUnit } = this.props;
    const { unit } = this.state;
    updateUnit(unit.id, params);
  };

  render() {
    const { loading, list } = this.props;
    const { unit } = this.state;
    const initialValue = (
      unit
        && unit.id
        && {
          id: unit.id,
          name: unit.name,
          short: unit.short,
          conversionFactor: unit.conversion_factor,
          parent: (unit.parent && unit.parent.id) || null,
        }) || null;
    return (
      <Spin spinning={loading}>
        <Card>
          <CardHeader>
            <ButtonBack title="Unit List" route={unitRouteLinks.list} />
            {
                unit && unit.id && (
                <div style={{ float: 'right' }}>
                  <Button
                    size="default"
                    type="primary"
                    className="button-color-daybreak"
                    icon="eye"
                    onClick={async () => {
                      try {
                        history.push(unitRouteLinks.show(unit.id));
                      } catch (e) {
                        /* */
                      }
                    }}
                  />
                  <Divider type="vertical" />
                  <CardButtonDelete url={`${serverURL}${unitApiRoutes.unitDelete(unit.id)}`} route={unitRouteLinks.list} />
                </div>
                )
              }
          </CardHeader>
          <CardBody>
            {unit && <WrappedUnitForm list={list} unit={initialValue} handleSubmit={this.handleSubmit} />}
            {!unit && <Empty />}
          </CardBody>
        </Card>
      </Spin>
    );
  }
}


UnitUpdatePage.defaultProps = {
  loading: false,
  list: [],
  updateUnit: () => {},
  dispatch: () => {},
  clearStore: () => {},
  clearNotifications: () => {},
  match: {
    param: null,
  },
  getList: () => { },
};

UnitUpdatePage.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape([])),
  updateUnit: PropTypes.func,
  dispatch: PropTypes.func,
  clearStore: PropTypes.func,
  clearNotifications: PropTypes.func,
  match: PropTypes.shape(),
  getList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.unitReducer.loading,
  list: state.unitReducer.list,
});

const mapDispatchToProps = (dispatch) => ({
  updateUnit: (id, param) => dispatch(
    unitActions.updateUnit(id, param),
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
const WrappedUnitForm = Form.create({ name: 'unit_update' })(UnitForm);
export default connect(mapStateToProps, mapDispatchToProps)(UnitUpdatePage);
