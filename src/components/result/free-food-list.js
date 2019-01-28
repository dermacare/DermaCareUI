import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import styles from './list-styles';
import FreeFoodCard from './free-food-card';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const FreeFoodContainer = styled.div`
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

let FreeFoodListView = ({classes, results, onResultSelect}) => (
    <FreeFoodContainer>
        {
            results && results.length?
            results.map((r, i)=>{
                return (<FreeFoodCard result={r} key={i}>
                </FreeFoodCard>)
            }):
            <div></div>
        }
    </FreeFoodContainer>
);

FreeFoodListView.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FreeFoodListView);