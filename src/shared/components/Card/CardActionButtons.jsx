import React from 'react';
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonBack from '../Button/ButtonBack';
import CardButtonView from './CardButtonView';
import CardButtonDelete from './CardButtonDelete';
import { apiUrl} from '../../../constants/config';
import CardButtonEdit from './CardButtonEdit';


function CardActionButtons({
  entity, show, update, remove, deleteApiRouteFunction, linkRouteObject, title,
}) {
  return (
    <>
      <ButtonBack title={title} route={linkRouteObject.list} />
      {
        entity && entity.id && (
          <div style={{ float: 'right' }}>
            { show && (
              <>
                <CardButtonView route={linkRouteObject.show(entity.id)} />
                <Divider type="vertical" />
              </>
            )}
            { update && (
              <>
                <CardButtonEdit route={linkRouteObject.edit(entity.id)} />
                <Divider type="vertical" />
              </>
            )}
            { remove && <CardButtonDelete url={`${apiUrl}${deleteApiRouteFunction(entity.id)}`} route={linkRouteObject.list} /> }
          </div>
        )
      }
    </>
  );
}

CardActionButtons.propTypes = {
  linkRouteObject: PropTypes.shape({
    list: PropTypes.string,
    show: PropTypes.func,
    edit: PropTypes.func,
  }),
  deleteApiRouteFunction: PropTypes.func,
  show: PropTypes.bool,
  update: PropTypes.bool,
  remove: PropTypes.bool,
  title: PropTypes.string,
  entity: PropTypes.shape({
    id: PropTypes.number,
  }),
};

CardActionButtons.defaultProps = {
  entity: {
    id: null,
  },
  show: false,
  update: false,
  remove: false,
  linkRouteObject: {
    show: () => {},
    edit: () => {},
    list: '/dashboard',
  },
  deleteApiRouteFunction: () => {},
  title: '',
};

export default connect()(CardActionButtons);
