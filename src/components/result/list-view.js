import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

let ListView = ({classes, results, onResultSelect}) => {
    console.log('I was triggered during render '+JSON.stringify(results[0]))
    return (
    <React.Fragment>
        {!results
            ? ''
            : results.map(result => (
                <Card
                    className={classes.result}
                    key={result._id}
                    id={result._id}
                    onMouseUp={e => onResultSelect(e, result)}
                >
                    <Typography className={classes.resultHeader}>{result.name}</Typography>
                    <Typography className={classes.resultContent}>
                        {result.name.substring(0, 200)}
                    
                    </Typography>
                </Card>
            ))}
    </React.Fragment>
);}

ListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);
