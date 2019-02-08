const styles = theme => ({
  root: {
    width: '60%',
    margin: 'auto'
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
  }
});

export default styles;
