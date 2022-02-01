import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  disableGutter: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 'bold',
  },
  cta: {
    marginLeft: theme.spacing(1),
    '&:first-child': {
      marginLeft: theme.spacing(0),
    },
  },
}));

/**
 * Component to display the section headers
 *
 * @param {Object} props
 */
const Dialog = props => {
  const {
    title,
    titleVariant,
    subtitleVariant,
    subtitle,
    label,
    align,
    titleClasses,
    className,
    buttonProps,
    titleProps,
    subtitleProps,
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  let justifyGrid = 'center';
  if (align === 'left') {
    justifyGrid = 'flex-start';
  } else if (align === 'right') {
    justifyGrid = 'flex-end';
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle {...titleProps} id="responsive-dialog-title">
        {title}
      </DialogTitle>
      {subtitle && (
        <DialogContent>
          <DialogContentText
            {...subtitleProps}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></DialogContentText>
        </DialogContent>
      )}

      <DialogActions>
        <Button
          {...buttonProps}
          onClick={handleClose}
          color="primary"
          autoFocus
        >
          {buttonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Dialog.defaultProps = {
  titleVariant: 'h4',
  titleProps: {},
  subtitleProps: {},
};

Dialog.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Title of the section header
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Subtitle of the section header
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Label title of the section header
   */
  buttonLabel: PropTypes.string,

  align: PropTypes.oneOf(['right', 'left', 'center']),

  titleClasses: PropTypes.string,

  /**
   * Title variant
   */
  titleVariant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .isRequired,
  /**
   * SubTitle variant
   */
  subtitleVariant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
  ]),
  /**
   * SubTitle color
   */
  subtitleColor: PropTypes.oneOf([
    'textPrimary',
    'textSecondary',
    'primary',
    'secondary',
  ]),
  /**
   * Additional properties to pass to the Button component
   */
  buttonProps: PropTypes.object,
  /**
   * Additional properties to pass to the title Typography component
   */
  titleProps: PropTypes.object,
  /**
   * Additional properties to pass to the subtitle Typography component
   */
  subtitleProps: PropTypes.object,
};

export default Dialog;
