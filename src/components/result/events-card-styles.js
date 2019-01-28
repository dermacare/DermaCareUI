const styles = theme => ({
	root: {
		display: 'flex',
		flexShrink: 0,
		fontFamily: 'sans-serif',
		height: '185px',
		width: '50%',
		alignSelf: 'center',
		[theme.breakpoints.down('md')]: {
			width: '90%',
			alignSelf: 'center',
		}
	},
	paper: {
		margin: '10px',
		width: '100%',
		minHeight: '120px',
		display: 'flex',
		flexDirection: 'row',
	}
});

export default styles;
