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
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { MdFavorite, MdWbSunny, MdGroupWork, MdFace } from 'react-icons/md';
import {IoIosLeaf} from 'react-icons/io';
import { IconContext } from "react-icons";

const colorAcne = ["green", "yellow","orange","orange","red", "red"];
const colorIrritation = ["green", "#fdd835", "#fdd835", "#ff6d00", "red"];
const colorSafety = ["green", "green", "#fdd835", "#fdd835", "#ff6d00", "#ff6d00", "red", "red", "red", "red", "red", "red"];

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
    console.log("MY CURRENT STATE: ", props);
    // props.result.ingredients);
  }
  render() {
    const { classes, result} = this.props
    return (
      <Paper className={classes.root}>
        <Grid container spacing={8}>
          <Grid item>
            <CardMedia style = {{ height: 120, width: 120 }}
                className={classes.cover}
                image={require('../../../../assets/img/no-image.png')}
                title="Product image"
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" style = {{margin: '15px'}} className={'tableTitle'}>
              {result.name}
            </Typography>
          </Grid>
        </Grid>
        <Table className={classes.table}>
          <TableHead>
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
                <CustomTableCell align="right">{row.function.map(f => (<div>{f}</div>))}</CustomTableCell>
                <CustomTableCell align="right">
                {row.uv ?
                  (
                    <IconContext.Provider value={{ color: "#fdd835", className: "global-class-name" }}>
                    <MdWbSunny / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <MdWbSunny / >
                    </IconContext.Provider>
                  )}
                  </CustomTableCell>
                <CustomTableCell align="right">
                {row.acne ?
                  (
                    <IconContext.Provider value={{ color: colorAcne[row.acne], className: "global-class-name" }}>
                    <MdGroupWork / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <MdGroupWork / >
                    </IconContext.Provider>
                  )}
                </CustomTableCell>
                <CustomTableCell align="right">
                {row.irritant ?
                  (
                    <IconContext.Provider value={{ color: colorIrritation[row.irritant], className: "global-class-name" }}>
                    <MdFace / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <MdFace / >
                    </IconContext.Provider>
                  )}
                </CustomTableCell>
                <CustomTableCell align="right">
                {row.safety ?
                  (
                    <IconContext.Provider value={{ color: colorIrritation[row.safety.charAt("0")], className: "global-class-name" }}>
                    <IoIosLeaf / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                    <IoIosLeaf / >
                    </IconContext.Provider>
                  )}
                </CustomTableCell>
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
