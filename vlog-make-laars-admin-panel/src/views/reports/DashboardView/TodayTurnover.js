import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles } from '@material-ui/core';
// import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
// import Label from 'src/components/Label';
import currencyFormatter from 'currency-formatter';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  }
}));

const TodayTurnover = ({ className, totalInvoiceAmount, ...rest }) => {
  const classes = useStyles();

  const formatPrice = price => {
    return currencyFormatter.format(price?.toString()?.replace(',', '.'), {
      locale: 'de-DE',
      decimal: ',',
      thousand: '',
      precision: 2,
      format: '%v'
    });
  };
    
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          OMZET VANDAAG
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            €{formatPrice(totalInvoiceAmount)}
          </Typography>
          {/* <Label */}
            {/* className={classes.label} */}
            {/* color={data.difference > 0 ? 'success' : 'error'} */}
          {/* > */}
            {/* {data.difference > 0 ? '+' : ''} */}
            {/* {data.difference}% */}
          {/* </Label> */}
        </Box>
      </Box>
    </Card>
  );
};

TodayTurnover.propTypes = {
  className: PropTypes.string
};

export default TodayTurnover;
