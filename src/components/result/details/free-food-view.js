import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './sports-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FreeFoodList from '../free-food-list';

let FreeFoodView = ({results}) => (
    <FreeFoodList results={results}/>
)

export default withStyles(styles)(FreeFoodView);