/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
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
    <div className="wrapper">
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={4}>
              <Card className={classes[cardAnimaton]}>

                <CardHeader color="info" className={classes.cardHeader}>
                  <b>Biznet</b>
                  {/*<p className={classes.divider}>{('Enter your credentials').toUpperCase()}</p>*/}
                </CardHeader>
                <CardBody>
                  <LoginForm
                    loading={authReducer.loading}
                    handleLogin={(credentials) => onLogIn(credentials)}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
        <ul className="bg-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        {/*<Footer />*/}
      </div>
    </div>
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
