import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

let ErrorMessage = ({classes, errorMessage, showError, handleCloseError}) => {
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={showError}
          autoHideDuration={6000}
          onClose={handleCloseError}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{errorMessage}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleCloseError}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
}

export default withStyles(styles)(ErrorMessage);

