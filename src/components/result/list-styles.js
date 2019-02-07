const styles = theme => ({
  result: {
    padding: '10px',
    margin: '10px 5px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '60%',
      marginLeft: '100px'
    },
    cursor: 'pointer',
    overflow: 'inherit'
  },
  resultHeader: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  resultContent: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '80%'
    }
  },
  resultUrl: {}
});

export default styles;
