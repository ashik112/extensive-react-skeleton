/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import Footer from '../../../../components/Footer/Footer';
import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import CardHeader from '../../../../components/Card/CardHeader';
import styles from '../../../../assets/jss/material-kit-react/views/loginPage';
import image from '../../../../assets/img/background.svg';
import authActions from '../../redux/actions';
import LoginForm from '../templates/LoginForm';
import AnimationBoxBubbles from '../../../../views/atoms/AnimationBoxBubbles';
import './LoginPage.scss';
//import Button from '../../components/CustomButtons/Button';
//import { InputAdornment } from '@material-ui/core';
//import { People, Lock } from '@material-ui/icons';
//import CardFooter from '../../components/Card/CardFooter';
//import CustomInput from '../../components/CustomInput/CustomInput';

const useStyles = makeStyles(styles);

function LoginPage({ onLogIn, authReducer, stopButtonLoading }) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  useEffect(() => stopButtonLoading(), [stopButtonLoading]);
  setTimeout(() => {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
          boxShadow: 'inset 0 0 0 50vw rgba(38, 198, 218,0.1)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className={classes.container} style={{ paddingBottom: 0 }}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={4}>
              <Card
                className={classes[cardAnimaton]}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 1), 0 1px 5px 0 rgba(0, 0, 0, 1)',
                }}
              >
                <CardHeader color="info" className={classes.cardHeader}>
                  <Avatar size={64} icon="user" style={{ color: '#00acc1', backgroundColor: '#ffffff' }} />
                  <p className={classes.divider}>{('WELCOME TO BIZNET').toUpperCase()}</p>
                </CardHeader>
                {/*<CardHeader color="info" className={classes.cardHeader}>
                  <b>Biznet</b>
                  <p className={classes.divider}>{('Enter your credentials').toUpperCase()}</p>
                </CardHeader>*/}
                <CardBody className="login-page">
                  <LoginForm
                    loading={authReducer.loading}
                    handleLogin={(credentials) => onLogIn(credentials)}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <AnimationBoxBubbles />
        </div>
        <Footer whiteFont />
        {/*<Footer />*/}
      </div>
    </>
  );
}

LoginPage.defaultProps = {
  onLogIn: () => { },
  stopButtonLoading: () => { },
  authReducer: {},
};

LoginPage.propTypes = {
  authReducer: PropTypes.shape(),
  onLogIn: PropTypes.func,
  stopButtonLoading: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { authReducer } = state;
  return {
    authReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLogIn: (credentials) => dispatch(
    authActions.login(
      credentials,
    ),
  ),
  stopButtonLoading: () => dispatch(
    authActions.stopLoading(),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
