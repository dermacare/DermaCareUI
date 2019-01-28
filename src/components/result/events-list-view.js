import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import EventsCard from './events-card';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

let EventsListView = ({classes, results, onResultSelect}) => (
    <React.Fragment>
        {
            results && results.length?
            results.map((r, i)=>{
                return (<EventsCard result={r} key={i}>
                </EventsCard>)
            }):
            <div>
            </div>
        }
    </React.Fragment>
);

// Nearest is {results[results.length-1].title}

EventsListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsListView);
