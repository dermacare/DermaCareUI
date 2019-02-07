const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  paper: {
    margin: '10px',
    padding: '10px',
        width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '900px',
      marginLeft: '100px'
    }
  },
  'tableTitle': {
    margin: '20px 20px 20px 20px',
    padding: '10px',
  }
});

export default styles;
