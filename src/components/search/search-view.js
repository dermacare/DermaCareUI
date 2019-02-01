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



let Search = ({ classes, category, categories, onSearch, onChange, onCategoryChange }) => {
	return (
		<form className={classes.form} autoComplete="off" onSubmit={event => onSearch(eventUtils.stop(event))}>
			<div className={classes.margin}>
				<Grid container spacing={24} alignItems="center" justify="center">
					<Grid className={classes.searchIcon} item>
						<SearchOutlinedIcon />
					</Grid>
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
							id="unibrowser-search"
							label="Search DermaCare"
							type="search"
							margin="none"
							variant="outlined"
							onChange={onChange}
						/>
					</Grid>
				</Grid>
			</div>
		</form>
	);
};

export default withStyles(styles)(Search);
