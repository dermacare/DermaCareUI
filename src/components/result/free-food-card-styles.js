const styles = theme => ({
	root: {
		flexGrow: 1,
        display: 'flex',
        minHeight: '300px',
		width: '48%',
        minWidth: '550px',
        height: '280px',
        justifyContent: 'center'
	},
	paper: {
		margin: '10px',
        padding: '20px',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: "column",
        cursor: "pointer",
        [theme.breakpoints.down('md')]: {
			width: '80%',
			alignSelf: 'center',
		}
	}
});

export default styles;