import { relative } from "path";

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '300px',
		width: '48%',
		minWidth: '550px',
		[theme.breakpoints.down('md')]: {
			width: '90%',
			alignSelf: 'center',
		}
	},
	paper: {
		display: 'flex',
		position: 'relative',
		flexDirection: "row",
		margin: '10px',
		height: '260px',
		maxHeight: '300px',
		minWidth: '350px',
		fontFamily: 'sans-serif',
	}
});

export default styles;