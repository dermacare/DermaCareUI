import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './professor-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let FaqView = ({ classes, result }) => (
	<div className={classes.root}>
		<Paper className={classes.paper} elevation={1}>
			<Typography variant='h2'>{result.heading}</Typography>
			<Typography>{result.content}</Typography>
		</Paper>
	</div>
);

FaqView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FaqView);
