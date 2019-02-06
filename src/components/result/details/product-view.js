import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './product-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let ProductView = ({ classes, result }) => {
  console.log("I'm a product-view of: " + JSON.stringify(result))
  return (
	<div className={classes.root}>
		<Paper className={classes.paper} elevation={1}>
			<Typography variant="h2">{result.heading}</Typography>
			<Typography>{result.content}</Typography>
		</Paper>
	</div>
);
}

ProductView.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductView);

