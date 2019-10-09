/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { InputAdornment } from '@material-ui/core';
//import { People, Lock } from '@material-ui/icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../../../components/Footer/Footer';
import GridContainer from '../../../../components/Grid/GridContainer';
import GridItem from '../../../../components/Grid/GridItem';
//import Button from '../../components/CustomButtons/Button';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody';
import CardHeader from '../../../../components/Card/CardHeader';
//import CardFooter from '../../components/Card/CardFooter';
//import CustomInput from '../../components/CustomInput/CustomInput';
import styles from '../../../../assets/jss/material-kit-react/views/loginPage';
import image from '../../../../assets/img/background.svg';
import authActions from '../../redux/actions';
import LoginForm from '../templates/LoginForm';

const useStyles = makeStyles(styles);

function LoginPage({ onLogIn, authReducer }) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
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
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={10} md={4}>
              <Card className={classes[cardAnimaton]}>

                <CardHeader color="success" className={classes.cardHeader}>
                  <b>Biznet</b>
                </CardHeader>
                {/*<p className={classes.divider}>Or Be Classical</p>*/}
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
      </div>
    </>
  );
}

LoginPage.defaultProps = {
  onLogIn: () => { },
  authReducer: {},
};

LoginPage.propTypes = {
  authReducer: PropTypes.shape(),
  onLogIn: PropTypes.func,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
