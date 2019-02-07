const styles = theme => ({
	search: {
		width: '100%'
	},
	searchGrid: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '40%'
		}
	},
	searchIcon: {
		display: 'none',
		background: '#f2f3f7',
		[theme.breakpoints.up('md')]: {
			display: 'block'
		}
	},
	margin: {
		margin: theme.spacing.unit
	},
	form: {
		width: '100%'
	},
	select: {
		minWidth: '100px'
	},
	label: {
		textAlign: 'center'
	}
});

export default styles;
