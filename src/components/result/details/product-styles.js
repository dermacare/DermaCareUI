const styles = theme => ({
  root: {
    width: '90%',
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
  },
  table: {
    width: '100%',
    margin: 'auto'
  }
});

export default styles;
