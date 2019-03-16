import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './product-compare-styles';
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
import { FaQuestionCircle } from 'react-icons/fa';
import {IoIosLeaf} from 'react-icons/io';
import { IconContext } from "react-icons";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {IoIosGitCompare} from "react-icons/io";
import {IoIosHeart} from "react-icons/io";

const colorAcne = ["green", "e3e31a","orange","orange","red", "red"];
const colorIrritation = ["green", "#fdd835", "#fdd835", "#ff6d00", "red"];
const colorSafety = ["green", "green", "#fdd835", "#fdd835", "#ff6d00", "#ff6d00", "red", "red", "red", "red", "red", "red"];

const tooltipTitle = "Green color means that the ingredient is low hazard. The closer to red is the color, the higher potential risk.";
const uvTooltipTitle = "UV is not implemented yet."

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

class ProductCompareView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, result} = this.props
    return (
      <Paper className={classes.root}>
        <div align="right">
        </div>
        <Grid container spacing={8}>

        <Typography variant="h6" align="center" style = {{margin: '20px'}} className={'tableTitle'}>
          COMMON INGREDIENTS IN THESE PRODUCTS ARE
        </Typography>

        </Grid>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Ingredient name</CustomTableCell>
              <CustomTableCell align="right">Function
              </CustomTableCell>
              <CustomTableCell align="right">UV
                <Tooltip placement="top" title={uvTooltipTitle} aria-label="help">
                  <IconButton color='inherit'>
                    <FaQuestionCircle style={{marginLeft: '2px', fontSize: 10}} / >
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
              <CustomTableCell align="right">Acne
                <Tooltip placement="top" title={tooltipTitle} aria-label="help">
                  <IconButton color='inherit'>
                    <FaQuestionCircle style={{marginLeft: '2px', fontSize: 10}} / >
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
              <CustomTableCell align="right">Irritant
                <Tooltip placement="top" title={tooltipTitle} aria-label="help">
                  <IconButton color='inherit'>
                    <FaQuestionCircle style={{marginLeft: '2px', fontSize: 10}} / >
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
              <CustomTableCell align="right">Safety
                <Tooltip placement="top" title={tooltipTitle} aria-label="help">
                  <IconButton color='inherit'>
                    <FaQuestionCircle style={{marginLeft: '2px', fontSize: 10}} / >
                  </IconButton>
                </Tooltip>
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.common_ingredients.map(row => (
              <TableRow className={classes.row} key={row._id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell align="right">{row.function.map(f => (<div>{f}</div>))}</CustomTableCell>
                <CustomTableCell align="right">
                {row.uv ?
                  (
                    <IconContext.Provider value={{ size: '2em', color: "#fdd835", className: "global-class-name" }}>
                    <MdWbSunny / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ size: '2em', color: "white", className: "global-class-name" }}>
                    <MdWbSunny / >
                    </IconContext.Provider>
                  )}
                  </CustomTableCell>
                <CustomTableCell align="right">
                {row.acne ?
                  (
                    <IconContext.Provider value={{ size: '2em', color: colorAcne[row.acne], className: "global-class-name" }}>
                    <MdGroupWork / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ size: '2em', color: "white", className: "global-class-name" }}>
                    <MdGroupWork / >
                    </IconContext.Provider>
                  )}
                </CustomTableCell>
                <CustomTableCell align="right">
                {row.irritant ?
                  (
                    <IconContext.Provider value={{ size: '2em', color: colorIrritation[row.irritant], className: "global-class-name" }}>
                    <MdFace / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ size: '2em', color: "white", className: "global-class-name" }}>
                    <MdFace / >
                    </IconContext.Provider>
                  )}
                </CustomTableCell>
                <CustomTableCell align="right">
                {row.safety ?
                  (
                    <IconContext.Provider value={{ size: '2em', color: colorSafety[row.safety.charAt("0")], className: "global-class-name" }}>
                    <IoIosLeaf / >
                    </IconContext.Provider>
                  ) :
                  (
                    <IconContext.Provider value={{ size: '2em', color: "white", className: "global-class-name" }}>
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

ProductCompareView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCompareView);
