import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './sports-card-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';



const StyledMainSection = styled.div`
    display: flex;
    flex-basis: 35%;
    padding: 10px;
    margin-right: 1px;
    flex-direction: row;
    background: #fff;
    flex-shrink: 0;
    min-width: 390px;

    & div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    & .team {

    }

    & .home {
        
    }

    & .mid {
        flex-basis: 40%;

        .date, .misc {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
        }

        .alt-text, .time {
            display: flex;
            font-family: sans-serif;
            justify-content: center;
            align-items: center;
        }
    }

    & .score {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .home-score {
            display: flex;
            font-size: 40px;
            font-family: sans-serif;

        }
        .away-score{
            display: flex;
            font-size: 40px;
            align-items: flex-end;
            font-family: sans-serif;
        }
    }

    & .away {

    }
`

const StyledMidDetails = styled.div`
    display: flex;
    flex-basis: 28%;
    padding: 10px;
    background: #fff;
    flex-direction: column;
    flex-shrink: 1;

    .sport{
        display: flex;
        flex-basis: 20%;
        justify-content: center;
        font-family: sans-serif;
    }

    .event-details{
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;

        a {
            border: 1px solid #0076c0;
            padding: 5px;
            font-family: sans-serif;
            border-radius: 5px;
            text-decoration: none;
            color: #0076c0;
        }
    }
`

const StyledVenue = styled.div`
    display: flex;
    flex-basis: 35%;
    padding: 10px;
    margin-left: 1px;
    background: #fff;
    flex-shrink: 1;

    .location{
        display: flex;
        font-family: sans-serif;
    }
`

const StyledTeam = styled.div `
    display: flex;
    & .logo{
        flex-grow: 2;
        justify-content: center;
        align-items: center;
        img {
            height: 60px;
            width: 60px;
        }
    }
    & .team-name{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        font-family: sans-serif;
        align-items: center;
    }

`
const Team = ({result}) => (
    <StyledTeam>
        <div className="logo">
            <img src={result.logo_url||""}/>
        </div>
        <div className="team-name">
            <span>{result.name||""}</span>
        </div>
    </StyledTeam>
)

const MainSection = ({result})=>(
    <StyledMainSection>
        {
        result.home ?
        <div className="home team">
            <Team result={result && result.home ? result.home : {}} />
        </div> : ""
        }
        <div className="mid">
            <div className="date">
                <span>{result && result.date ? result.date:""} {result && result.progress ? result.progress : ""}</span>
            </div>
            {
                result.home && !result.home.score ?
                    <React.Fragment>
                        <div className="time">{result && result.time ? result.time : ""}</div>
                    </React.Fragment>:
                result.home ? 
                <React.Fragment>
                    <div className="score">
                        <div className="home-score">
                            <span>{result && result.home && result.home.score ? result.home.score : "NA"}</span>
                        </div>
                        <div className="away-score">
                            <span>{result && result.away && result.away.score ? result.away.score : "NA"}</span>
                        </div>
                    </div>
                </React.Fragment>
                : result.alt_title ?
                <React.Fragment>
                    <div className="alt-text">{result && result.alt_title ? result.alt_title: ""}</div>
                </React.Fragment>
                : ""
            }  
            <div className="misc">
                <span>{result && result.airing ? result.airing:""}</span>
            </div>  
        </div>
        {
        result.away ?
        <div className="away team">
            <Team result={result && result.away ? result.away : {}} />
        </div>:""
        }
    </StyledMainSection>
)

const MidDetails = ({result})=>(
    <StyledMidDetails>
        <div className="sport">
            <span>{result.sport}</span>
        </div>
        <div className="event-details">
            <a href={result.details}> Event Details </a>
        </div>
    </StyledMidDetails>
)

const Venue = ({result})=>(
    <StyledVenue>
        <div className="location">
            {result.location}
        </div>
    </StyledVenue>
)



let SportsCard = ({classes, result}) => (
    <div className={classes.root}>
        <Paper className={classes.paper} elevation={1}>
            <MainSection result={result}/>
            <MidDetails result={result}/>
            <Venue result={result}/>
        </Paper>
    </div>
)

SportsCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SportsCard);