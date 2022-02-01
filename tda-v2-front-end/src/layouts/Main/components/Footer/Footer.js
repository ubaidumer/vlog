import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  Divider,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import YoutubeIcon from '@material-ui/icons/Youtube';

import { Image } from 'components/atoms';
import { footerPages } from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0, 0, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0, 0, 0),
    },
    background: '#fff',
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    top: '11px',
    position: 'relative',
  },
  logoImage: {
    width: '85%',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: '#121037',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    color: '#121037',
    fontSize: '1.25rem',
  },
  menuGroupTitle: {
    textTransform: 'capitalize',
    color: '#121037',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: '#121037',
  },
  subscribeHeader: {
    fontSize: '1rem',
    color: '#121037',
  },
  contactIcon: {
    width: '100%',
    height: '100%',
    paddingRight: '.5rem',
  },
  subTitle: {
    position: 'absolute',
    top: '28px',
    left: '30px',
    fontSize: '0.875rem',
  },
  subTitlePadding: {
    paddingBottom: '28px',
  },
  youTubeIcon: {
    fontSize: '30px',
  },
  footerLi: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  secondFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px 17px',
    },
  },
  footerNavLink: {
    color: '#121037',
    fontSize: '12px',
    paddingRight: '1rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  footerText: {
    color: '#121037',
    fontSize: '12px',
    paddingRight: '0.5rem',
  },
  socialMediaIcons: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  marginTop3: {
    marginTop: '3rem',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const IconMenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem
            disableGutters
            key={i}
            className={
              (classes.menuGroupItem,
              page.subTitle ? classes.subTitlePadding : '')
            }
          >
            <Image
              className={classes.contactIcon}
              src={page.icon}
              alt="TDA"
              lazy={true}
            />
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
            {page.subTitle ? (
              <div className={clsx(classes.subTitle, 'submenu-item')}>
                {page.subTitle}
              </div>
            ) : (
              ''
            )}
          </ListItem>
        ))}
      </List>
    );
  };

  const RentalPages = () => {
    const rental = pages.rental;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={rental} />
        </div>
      </div>
    );
  };

  const ClinicsAndToursPages = () => {
    const clinics_and_tours = pages.clinics_and_tours;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={clinics_and_tours} />
        </div>
      </div>
    );
  };

  const PopularPages = () => {
    const popular_pages = pages.popular_pages;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={popular_pages} />
        </div>
      </div>
    );
  };

  const ContactPages = () => {
    const contact = pages.contact;
    return (
      <div className={classes.menu}>
        <div>
          <IconMenuGroup item={contact} />
        </div>
      </div>
    );
  };

  const SecondFooter = () => {
    const contact = pages.contact;
    return (
      <List className={clsx(classes.secondFooter)}>
        <ListItem className={classes.footerLi}>
          {footerPages.pages.map((link, i) => (
            <Typography
              key={link.page + i}
              variant="body2"
              component={'a'}
              href={link.href}
              className={clsx(classes.footerNavLink, 'submenu-item')}
              color="textPrimary"
              onClick={() => onClose()}
            >
              {link.page}
            </Typography>
          ))}
        </ListItem>
        <ListItem className={classes.footerLi}>
          <Typography
            variant="body2"
            className={clsx(classes.footerText, 'submenu-item')}
            color="textPrimary"
          >
            Book online and pay easily and securely with:
          </Typography>
        </ListItem>
        <ListItem className={classes.footerLi}>
          <Image
            src="https://assets.it22.nl/tda/footer/payment_options.png"
            alt="Payment Options"
            className={classes.paymentOptionImg}
            lazy={true}
          />
        </ListItem>
        <ListItem className={classes.socialMediaIcons} disableGutters>
          <IconButton className={classes.socialIcon}>
            <FacebookIcon className={classes.icon} />
          </IconButton>
          <IconButton className={classes.socialIcon}>
            <InstagramIcon className={classes.icon} />
          </IconButton>
          {/* <IconButton className={classes.socialIcon}>
            <YoutubeIcon className={classes.youTubeIcon} />
          </IconButton> */}
        </ListItem>
      </List>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="Tour de Amsterdam Home">
                    <Image
                      className={classes.logoImage}
                      src="https://assets.it22.nl/tda/logo.png"
                      alt="TDA"
                      lazy={true}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <Typography
                  className={classes.subscribeHeader}
                  variant="h6"
                  color="secondary"
                  component="p"
                  align="left"
                >
                  Subscribe To Our Newsletter
                </Typography>
              </ListItem>

              <ListItem disableGutters>
                <TextField
                  size="small"
                  fullWidth
                  label="Name"
                  variant="outlined"
                />
              </ListItem>
              <ListItem disableGutters>
                <TextField
                  size="small"
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                />
              </ListItem>
              <ListItem disableGutters>
                <Button
                  className="orange__btn"
                  fullWidth
                  variant="contained"
                  size="medium"
                >
                  Subscribe To Our Newsletter
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={9} className={classes.menuListContainer}>
            <Grid container spacing={0}>
              <Grid item>
                <RentalPages />
              </Grid>
              <Grid item>
                <ClinicsAndToursPages />
              </Grid>
              <Grid item>
                <PopularPages />
              </Grid>
              <Grid item>
                <ContactPages />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.marginTop3} />
      <div className={classes.footerContainer}>
        <SecondFooter />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
