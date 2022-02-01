import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UseQuantity } from 'components/atoms';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  icon: {
    color: '#1A2A49',
    background: '#C4C4C4',
    width: 25,
    height: 25,
    borderRadius: '50%',
    textAlign: 'center',
    float: 'left',
    position: 'relative',
    '&::before': {
      position: 'relative',
      top: 5,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  reservationDays: {
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    float: 'left',
  },
}));

const QuantityInput = props => {
  const classes = useStyles();

  const quantity = UseQuantity();

  const decrement = () => {
    quantity.setValue(quantity.value - 1);
  };

  const increment = () => {
    quantity.setValue(quantity.value + 1);
  };

  return (
    <>
      <i
        disabled={quantity.value === 1}
        onClick={decrement}
        className={clsx(classes.icon, 'fas fa-angle-left')}
      ></i>
      <div className={classes.reservationDays}>{quantity.value}</div>
      <i
        onClick={increment}
        className={clsx(classes.icon, 'fas fa-angle-right')}
      ></i>
    </>
  );
};

export default QuantityInput;
