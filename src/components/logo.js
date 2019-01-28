import React from 'react';
import logo from '../../assets/img/logo.png';
import { withStyles } from '@material-ui/core/styles';

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
