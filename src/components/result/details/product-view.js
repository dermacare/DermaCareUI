import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
import { FaQuestionCircle } from 'react-icons/fa';
import {IoIosLeaf} from 'react-icons/io';
import { IconContext } from "react-icons";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {IoIosGitCompare} from "react-icons/io";
import {IoIosHeart} from "react-icons/io";
import ErrorMessage from './error-message'

const colorAcne = ["green", "e3e31a","orange","orange","red", "red"];
const colorIrritation = ["green", "#fdd835", "#fdd835", "#ff6d00", "red"];
const colorSafety = ["green", "green", "#fdd835", "#fdd835", "#ff6d00", "#ff6d00", "red", "red", "red", "red", "red", "red"];

const tooltipTitle = "Green color means that the ingredient is low hazard. The closer to red is the color, the higher potential risk.";
const uvTooltipTitle = "UV is not implemented yet."
const compareTooltipTitle = "Add product to camparison list"
const favTooltipTitle = "Add product to favorites."

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

class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      showError: false,
    };
    this.addToCompareList = this.addToCompareList.bind(this);
    this.addToFavoriteList = this.addToFavoriteList.bind(this);
    this.handleCloseError = this.handleCloseError.bind(this);
  }

  handleCloseError = () => {
    this.setState({ errorMessage: '' })
    this.setState({ showError: false })
  }

  addToCompareList(){
    console.log("Clicked on compare list");
    let obj = this.props.result;  // Object to add to Comparison list
    // ADD CODE HERE
    fetch('http://dermacare.eastus.cloudapp.azure.com:3000/api/profile/comparison/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
          },
      body: JSON.stringify({'productId': obj._id}),
      mode: 'cors'
    })
    .then(response => {
        if (response.status == 201) {
          this.setState({errorMessage: 'Added'})
          this.setState({showError: true})
        }
        return response.json()
    })
    .then(json => {
       console.log("Res: "+ JSON.stringify(json))
        if ('error' in json) {
          this.setState({errorMessage: json.error})
          this.setState({showError: true})
        }
    })
    .catch(error => {
      console.log(error);
    });
  }

  addToFavoriteList(){
    console.log("Clicked on favorites list");
    let obj = this.props.result;  // Object to add to Favorites list
    // ADD CODE HERE
    fetch('http://dermacare.eastus.cloudapp.azure.com:3000/api/profile/favorites/add', {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token')
          },
      body: JSON.stringify({'productId': obj._id}),
      mode: 'cors'
    })
    .then(response => {
        if (response.status == 201) {
          this.setState({errorMessage: 'Added'})
          this.setState({showError: true})
        }
        return response.json()
    })
    .then(json => {
       console.log("Res: "+ JSON.stringify(json))
      if ('error' in json) {
        this.setState({errorMessage: json.error})
        this.setState({showError: true})
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {classes, result} = this.props
    return (
      <Paper className={classes.root}>
        <ErrorMessage errorMessage={this.state.errorMessage} showError={this.state.showError} handleCloseError={this.handleCloseError}/>
        <div align="right">
        <Tooltip placement="top" title={compareTooltipTitle} aria-label="help">
          <IconButton color='inherit' onClick={this.addToCompareList}>
            <IoIosGitCompare {...this.props} style={{margin:"20px"}} align="right" />
          </IconButton>
        </Tooltip>
        <Tooltip placement="top" title={favTooltipTitle} aria-label="help">
          <IconButton color='inherit' onClick={this.addToFavoriteList}>
            <IoIosHeart {...this.props} style={{margin:"20px"}} align="right" />
          </IconButton>
        </Tooltip>
        </div>
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
            {result.ingredients.map(row => (
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

ProductView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductView);
