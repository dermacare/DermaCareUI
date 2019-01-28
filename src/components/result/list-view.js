import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

let ListView = ({classes, results, onResultSelect}) => (
    <React.Fragment>
        {!results
            ? ''
            : results.map(result => (
                <Card
                    className={classes.result}
                    key={result.type}
                    id={result.id}
                    onMouseUp={e => onResultSelect(e, result)}
                >
                    <Typography className={classes.resultHeader}>{result.heading}</Typography>
                    <Typography className={classes.resultUrl}>
                        <a href={result.url}>{result.url}</a>
                    </Typography>
                    <Typography className={classes.resultContent}>
                        {result.content.substring(0, 200)}
                        ...
								</Typography>
                </Card>
            ))}
    </React.Fragment>
);

ListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);