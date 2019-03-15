import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {IoIosGitCompare} from "react-icons/io";
import {IoIosTrash} from "react-icons/io";

let ListView = ({classes, results, onResultSelect, showRemove, onRemove}) => {
    return (
    <React.Fragment>
        {!results
            ? ''
            : results.map(result => (
                <Card
                    className={classes.result}
                    key={result._id}
                    id={result._id}
                    onClick={e => onResultSelect(e, result)}
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
                    {showRemove
                      ? (
                        <Grid item alignItems='flex-end' alignContent='flex-end'>
                          <IconButton color='inherit' onClick={e => onRemove(e, result)} >
                            <IoIosTrash style={{margin:"20px"}} align="right"/>
                          </IconButton>
                        </Grid>
                      ) :(<p/>)
                    }
                </Grid>
                </Card>
            ))}
    </React.Fragment>
);}

ListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListView);
