import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './free-food-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledUserSummary = styled.div`
    display: flex;

    & img {
        height: 50px;
        width: 50px;
        border-radius: 25px;
    }

    & .username {
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-weight: bold;
    }
`

const Description = styled.div`
    display: flex;
    margin: 0 5%;
    font-size: 1.6em;
`

const DateTime = styled.div`
    display: flex;
    margin-top: auto;
    padding-top: 10px;
    color: #adadad;
`

const formatDate = (date) => `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

const UserSummary = ({result}) => (
    <StyledUserSummary>
        <div className="image">
            <img src={result && result.media_url ? result.media_url : "/assets/img/logo.png"} />
        </div>
        <div className="username">
            <span>{result.screen_name}</span>
        </div>
    </StyledUserSummary>
)

let FreeFoodCard = ({classes, result}) => (
    <div className={classes.root} onClick={()=>{
        window.open(result.url, "_blank");
    }}>
        <Paper className={classes.paper} elevation={1}>
            <UserSummary result = {result}/>
            <Description>
                {result.description}
            </Description>
            <DateTime>
                {formatDate(new Date(result.event_date))}
            </DateTime>
        </Paper>
    </div>
)

FreeFoodCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FreeFoodCard);