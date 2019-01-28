import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import SeminarCard from './seminar-card';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledSeminarContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: visible;
    @media (min-width: 700px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 1280px) {
        justify-content: center;
    }
`

let SeminarListView = ({classes, results, onResultSelect}) => (
    <StyledSeminarContainer>
        {
            results && results.events && results.events.length?
            results.events.map((r, i)=>{
                return (<SeminarCard result={r} key={i}>
                </SeminarCard>)
            }):
            <div></div>
        }
    </StyledSeminarContainer>
);

SeminarListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SeminarListView);