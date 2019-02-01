import React from 'react';
import logo from '../../assets/img/icon.png';
// import logo from '/Users/sandeepkhanna/Desktop/DermaCareUI/assets/img/logo.png';
import { withStyles } from '@material-ui/core/styles';

// var logo = '/Users/sandeepkhanna/Desktop/DermaCareUI/assets/img/logo.png';

const styles = theme => ({
    logo: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '3px'
    },
    image: {
        height: '300px',
        width: 'auto',
        [theme.breakpoints.down('xs')]: {
            height: '230px'
        }
    }
});

let Logo = ({ classes, height }) => (
	<div className={classes.logo}>
        <img className={classes.image} src={logo} style={height ? {height: height + 'px'} : {}} />
	</div>
);

export default withStyles(styles)(Logo);
