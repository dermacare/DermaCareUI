import React from 'react';
import eventUtils from '../../util/events';
import styles from './search-styles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';



let Search = ({ classes, category, categories, onSearch, onChange, onCategoryChange }) => {
  return (
    <form className={classes.form} autoComplete="off" onSubmit={event => onSearch(eventUtils.stop(event))}>
      <div className={classes.margin}>
        <Grid container spacing={24} alignItems="center" justify="center">
          <Grid item>
            <FormControl required>
              <InputLabel className={classes.label} htmlFor="searchCategory">
                Category
              </InputLabel>
              <Select
                required
                className={classes.select}
                value={category}
                onChange={onCategoryChange}
                disableUnderline={true}
                inputProps={{
                  name: 'category',
                  id: 'searchCategory'
                }}
              >
                {!categories
                  ? ''
                  : categories.map(c => (
                      <MenuItem key={c.value} value={c.value}>
                        {c.name}
                      </MenuItem>
                    ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.searchGrid}>
            <TextField
              className={classes.search}
              id="dermacare-search"
              label="Search"
              type="search"
              margin="none"
              variant="outlined"
              onChange={onChange}
            />
          </Grid>
        </Grid>
      </div>
      <div style={{textAlign: 'center'}}>
        <Typography variant="h6" style = {{margin: '15px', color: 'gray'}} className={'tableTitle'}>
          Featured Brands
        </Typography>
        <Grid container spacing={24} alignItems="center" justify="center">
          <Grid item>
            <Link to="/search/all?query=cosrx" className={classes.link}>
                  <img className={classes.image} src={require('../../../assets/img/brands/cosrx.png')} style={{height: '70px'}} />
            </Link>
          </Grid>
          <Grid item>
            <Link to="/search/all?query=etude%20house" className={classes.link}>
                  <img className={classes.image} src={require('../../../assets/img/brands/etudehouse.png')} style={{height: '70px'}} />
            </Link>
          </Grid>
          <Grid item>
            <Link to="/search/all?query=innisfree" className={classes.link}>
                  <img className={classes.image} src={require('../../../assets/img/brands/innisfree.png')} style={{height: '70px'}} />
            </Link>
          </Grid>
          <Grid item>
            <Link to="/search/all?query=the%20ordinary" className={classes.link}>
                  <img className={classes.image} src={require('../../../assets/img/brands/ordinary.png')} style={{height: '70px'}} />
            </Link>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default withStyles(styles)(Search);
