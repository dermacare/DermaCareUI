import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './seminar-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledEventImage = styled.div`
    display: flex;
    padding: 10px;
    width: 80px;
    justify-content: center;
    img {
        display: flex;
        height: 80px;
        width: 80px;
        border-radius: 40px;
    }
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    flex-basis: 80%;
    max-width: 80%;

    div {
        padding: 10px;
        padding-left: 0;
    }

    .title {
        color: #d74009;
        font-size: 24px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .description {
        max-height: 100px;
        overflow: hidden;
    }

    .date-time {
        margin-top: auto;
        i {
            margin-right: 5px;
        }
    }

    .location {
        margin-top: auto;
        color: #d74009;
        cursor: pointer;
        i {
            margin-right: 5px;
        }
    }
`

const EventImage = ({image}) => (
    <StyledEventImage>
        <img src={image || ""}></img>
    </StyledEventImage>
)

const onTitleClick = (link) => {
    window.open(link, "_blank");
}

const onLocationClick = (lat, lng) => {
    window.open(`https://www.google.com/maps/?q=${lat},${lng}`, "blank");
}

const Info = ({result}) => (
    <StyledInfo>
        <div className="title" onClick={() => onTitleClick(result.link)}>
            {result && result.title ? result.title : ""}
        </div>
        <div className="description">
            {result && result.desc ? result.desc : ""}
        </div>
        <div style={{marginTop: 'auto'}}>
            <div className="date-time">
                <i className="fas fa-clock"></i><span>{result && result.date ? result.date : "--"}</span>
            </div>
            <div className="location" onClick={()=>onLocationClick(result.lat, result.long)}>
                <i className="fa fa-map-marker"></i><span>{result && result.address ? result.address.split(',').slice(0,2).join(',') : "--"}</span>
            </div>
        </div>
    </StyledInfo>
)




let SeminarCard = ({classes, result}) => (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
            <EventImage image={result.image}/>
            <Info result={result} />
        </Paper>
    </div>
)

SeminarCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SeminarCard);