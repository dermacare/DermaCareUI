import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './seminar-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SeminarList from '../seminar-list-view'

let SeminarView = ({results}) => (
    <SeminarList results={results}/>
)

export default withStyles(styles)(SeminarView);