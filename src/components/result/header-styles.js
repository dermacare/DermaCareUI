import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    grow: {
        flexGrow: 1
    },
    title: {
        width: 130,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    link: {
        textDecoration: 'none',
        marginRight: '10px',
        color: 'inherit'
    },
    form: {
        width: '100%',
        display: 'flex'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        //marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '500px'
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%'
        //[theme.breakpoints.up('md')]: {
        //	width: 200
        //}
    }
});

export default styles;
