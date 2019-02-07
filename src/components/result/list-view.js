import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
                <Grid container spacing={8}>
                    <Grid item>
                        <CardMedia style = {{ height: 120, width: 120 }}
                            className={classes.cover}
                            image={require('../../../assets/img/no-image.png')}
                            title="Product image"
                        />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.resultHeader}>
                            {result.name.substring(0, 80)}
                        </Typography>
                        <Typography className={classes.resultContent}>
                            {result.name.substring(0, 90)}
                        </Typography>
                    </Grid>
                </Grid>
                </Card>
            ))}
    </React.Fragment>
);}

ListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);
