import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import SportsCard from './sports-card';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

let SportsListView = ({classes, results, onResultSelect}) => (
    <React.Fragment>
        {
            results && results.length?
            results.map((r, i)=>{
                return (<SportsCard result={r} key={i}>
                </SportsCard>)
            }):
            <div></div>
        }
    </React.Fragment>
);

SportsListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SportsListView);