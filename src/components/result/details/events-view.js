import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './events-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EventsList from '../events-list-view'

let EventsView = ({results}) => (
    <EventsList results={results}/>
)

export default withStyles(styles)(EventsView);
