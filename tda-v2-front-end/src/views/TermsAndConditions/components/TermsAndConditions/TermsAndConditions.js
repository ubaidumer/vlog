import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Typography, List, ListItem } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  webinarAvatar: {
    width: 150,
    height: 150,
  },
  listGrid: {
    overflow: 'hidden',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: theme.spacing(0),
    },
  },
  title: {
    fontWeight: 'bold',
    color: '#2d3748',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#718096',
    marginBottom: '0.5rem',
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const TermsAndConditions = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Typography className={classes.title} component="h2">
        Article 1 Rental sum
      </Typography>
      <Typography className={classes.subtitle}>
        The rent is determined on the basis of the applicable rates at the time
        of entering into the lease. The rates are stated on tourdeamsterdam.nl,
        unless otherwise agreed in writing.
      </Typography>
      <Typography className={classes.title} component="h2">
        Article 2 Payment
      </Typography>
      <List className={classes.list} disablePadding>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          1. The total rent of the lease must be paid in cash/card prior to the
          rental period, unless agreed otherwise in writing.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          2. The deposit (€ 150) must be paid in advance and in cash, unless
          agreed otherwise in writing. Tour de Amsterdam reserves the right not
          to refund (part of) the deposit if the renter is unable to transfer
          the rented equipment to Tour de Amsterdam in time or if the rented
          equipment is returned damaged. If the damage to the equipment exceeds
          the deposit, Tour de Amsterdam will submit a claim for the damage as
          referred to in Article 5, whereby the deposit will be deducted.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          3. If the renter cannot use the bicycle(s) for any reason, Tour de
          Amsterdam will not be liable for any resulting costs or damages.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          4. In the case referred to in the previous paragraph, the renter
          remains obliged to pay the full rent and any other amounts stated in
          the (settlement) bill, unless he demonstrates with regard to the rent
          that the bicycle could not be used due to a defect that was already
          present at the start of the rental period.
        </ListItem>
      </List>
      <Typography className={classes.title} component="h2">
        Article 3 Rental period
      </Typography>
      <List disablePadding>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          1. The rental period is the period between the times of commencement
          and submission as stated in the rental agreement.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          2. Extension of the rental period can only take place with the
          permission of Tour de Amsterdam and at the rates agreed at that time
          in writing between Tour de Amsterdam and the renter.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          3. Earlier return of the bicycle(s) will terminate the rental
          agreement without entitlement to a reduction in the rental amount
          stated in the rental agreement or the rental amount increased due to
          extension.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          4. The bicycle(s) must be returned to the address of Tour de Amsterdam
          or be ready at the location and time discussed.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          5. If the rental period as discussed in paragraph 1 is exceeded
          because the bicycle(s) is / are not delivered or are not handed in at
          the address of Tour de Amsterdam on time, the rental will continue
          until the bike is handed in. The rental rates as stated on
          tourdeamsterdam.nl plus the increase of a fine of €15,- for every day
          that the bike(s) is (are) late. Without unabated to the right to
          compensation for any costs and damages suffered by Tour de Amsterdam.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          6. Tour de Amsterdam will remain the right to declare the lease
          dissolved without judicial intervention and to demand the return of
          the bicycle(s) without delay or to take them back where and from whom
          the bicycle is located. Tour de Amsterdam is entitled to do this if
          the renter does not comply with any conditions of the rental
          agreement.
        </ListItem>
      </List>

      <Typography className={classes.title} component="h2">
        Article 4 Use
      </Typography>
      <List disablePadding>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          1. The bicycle(s) may only be used in accordance with their normal
          destination and by the renter themselves. The bicycle(s) must be
          returned in the condition in which the bicycle(s) was received.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          2. The renter must take good care of the bicycle(s). For example, the
          renter must take all precautions against damage, loss or theft. The
          bicycle must be stored indoors, with the bicycle(s) safely standing or
          hanging. Transport of the bicycle(s) is only permitted by means of a
          bicycle carrier and therefore never in the car itself, unless written
          permission has been given by Tour de Amsterdam.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          3. The bicycle(s) may in any case not be used in the dunes and on the
          beach, if paved paths and/or roads cannot be used.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          4. If the bicycle is not returned in the same condition (defects, mud,
          sand, etc.) Tour de Amsterdam is at all times entitled to withhold at
          least € 15 from the deposit as maintenance costs.
        </ListItem>
      </List>

      <Typography className={classes.title} component="h2">
        Article 5 Damage, loss, theft, injury, risk and liability
      </Typography>
      <List disablePadding>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          1. The renter is liable for damage to or loss of the bicycle(s) or
          parts thereof, as well as the other rented equipment, against amounts
          determined by Tour de Amsterdam. The bicycle(s) is (are) not insured
          against liability or damage.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          2. The renter rents the bicycle and accessories entirely at his own
          risk. Tour de Amsterdam assumes that the renter is aware and has taken
          note of the risks of this sport, and that he has sufficiently prepared
          and has sufficient knowledge of operating a (racing) bicycle. Tour de
          Amsterdam is therefore not responsible for any physical injury to
          persons or for damage to private property of the renter. The renter
          bears full legal liability for all damage caused by, or because of,
          the renter to himself or to third parties and Tour de Amsterdam is not
          liable.
        </ListItem>
      </List>
      <Typography className={classes.title} component="h2">
        Article 6 Costs during the rental period
      </Typography>
      <Typography className={classes.subtitle} component="h2">
        All charges and taxes relating to the bicycle(s) are for the renter.
        This is also during its use, such as storage, maintenance and repairs.
      </Typography>

      <Typography className={classes.title} component="h2">
        Article 7 Personal data
      </Typography>

      <Typography className={classes.subtitle} component="h2">
        The renter’s personal data stated will be processed by Tour de Amsterdam
        within the meaning of the Personal Data Protection Act. Based on this
        processing, Tour de Amsterdam can: execute the agreement, provide
        optimal service, provide the renter with product information and make
        personalized offers in a timely manner. The renter can opt out for the
        direct mailing
      </Typography>

      <Typography className={classes.title} component="h2">
        Article 8 Reservations, changes and cancellations
      </Typography>
      <Typography className={classes.subtitle} component="h2">
        Reservations are free at all times
      </Typography>
      <List disablePadding>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          1. Reservations can be canceled free of charge up to 7 days before the
          start of the rental period. If the reservation is canceled within 7
          days before the start of the rental period, Tour de Amsterdam is
          authorized to still invoice 50% of the rental amount. If the renter
          cancels the reservation 1 day before the start of the rental period or
          on the start day itself, Tour de Amsterdam will calculate 100% of the
          rent.
        </ListItem>
        <ListItem
          disableGutters
          className={classes.subtitle}
          data-aos="fade-up"
        >
          2. Reservations can be changed free of charge up to 7 days before the
          start of the rental period. If the reservation is changed within 7
          days before the start of the rental period and Tour de Amsterdam has
          loss of income due to this change, Tour de Amsterdam is authorized to
          invoice 50% of the difference. If the renter changes the reservation 1
          day before the start of the rental period or on the start day itself
          and this results in this loss of income, Tour de Amsterdam will still
          charge 100% of this difference to the renter.
        </ListItem>
      </List>
    </div>
  );
};

TermsAndConditions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default TermsAndConditions;
