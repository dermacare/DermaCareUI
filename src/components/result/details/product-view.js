import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './product-styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, result} = this.props
    console.log("Props: " + JSON.stringify(this.props))
    console.log("I'm a product-view of: " + JSON.stringify(result))
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <Typography variant="h6" style = {{margin: '15px'}} className={'tableTitle'}>
              {result.name}
            </Typography>
            <TableRow>
              <CustomTableCell>Ingredient name</CustomTableCell>
              <CustomTableCell align="right">Function</CustomTableCell>
              <CustomTableCell align="right">UV</CustomTableCell>
              <CustomTableCell align="right">Acne</CustomTableCell>
              <CustomTableCell align="right">Irritant</CustomTableCell>
              <CustomTableCell align="right">Safety</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.ingredients.map(row => (
              <TableRow className={classes.row} key={row._id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="right">{row.function}</CustomTableCell>
                <CustomTableCell align="right">{row.uv}</CustomTableCell>
                <CustomTableCell align="right">{row.acne}</CustomTableCell>
                <CustomTableCell align="right">{row.irritant}</CustomTableCell>
                <CustomTableCell align="right">{row.safety}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

ProductView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductView);

