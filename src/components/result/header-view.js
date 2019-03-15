import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './header-styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {IoIosHeart} from "react-icons/io";
import ProfileControl from '../profile/profile-control';
import {IoIosGitCompare} from "react-icons/io";

let renderFavoritesList = function(){
  console.log("Call route to render Favorites List");
  // ADD CODE HERE
}

let renderComparisonList = function(){
  console.log("Call route to render Comparison List");
  // ADD CODE HERE
}

let HeaderView = ({ classes, searchQuery, onSearchQueryChange, onSearchSubmit, onSearchBarFocus }) => (
  <AppBar position="static" style={{background:'#1e6125e8'}}>
    <Toolbar>
      <Link to="/" className={classes.link}>
            <img className={classes.image} src={require('../../../assets/img/icon1.png')} style={{height: '70px'}} />
      </Link>
      <form className={classes.form} onSubmit={onSearchSubmit} style={{width:'auto'}}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search"
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            value={searchQuery}
            onChange={onSearchQueryChange}
            onFocus={onSearchBarFocus}
            spellCheck={false}
          />
        </div>
      </form>
      <div className={classes.grow} />
      <IoIosHeart align="right" style={{margin:"20px"}} onClick={renderFavoritesList} />
      <IoIosGitCompare align="right" style={{margin:"20px"}} onClick={renderComparisonList} />
      <ProfileControl />
    </Toolbar>
  </AppBar>
);

HeaderView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderView);
