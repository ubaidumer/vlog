import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    color: '#000000',
    background: '#F2F2F2',
    width: '100%',
    height: '30px',
    marginBottom: '30px',
    padding: '6px 15px'
  },
  dBlock: {
    display: 'block'
  },
  lessPad: {
    marginBottom: 0
  }
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const FormHeader = props => {
  const { lessPad, text, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, lessPad ? classes.lessPad : '', className)}
      {...rest}
    >
      {text}
    </div>
  );
};

FormHeader.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Text
   */
  text: PropTypes.string.isRequired
};

export default FormHeader;
