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

let HeaderView = ({ classes, searchQuery, onSearchQueryChange, onSearchSubmit, onSearchBarFocus }) => (
  <AppBar position="static" style={{background:'#1e6125e8'}}>
    <Toolbar>
      <Link to="/" className={classes.link}>
            <img className={classes.image} src={require('../../../assets/img/icon1.png')} style={{height: '70px'}} />
      </Link>
      <form className={classes.form} onSubmit={onSearchSubmit}>
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
    </Toolbar>
  </AppBar>
);

HeaderView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderView);
