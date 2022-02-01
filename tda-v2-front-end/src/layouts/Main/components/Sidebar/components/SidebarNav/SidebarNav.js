/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
  Grid,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Section } from 'components/organisms';
import { Image } from 'components/atoms';

const useStyles = makeStyles({
  root: {},
  paymentOptionImg: {
    width: '70%',
    height: '80%',
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '3rem 4rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: 'white',
    width: '62%',
    paddingLeft: '0',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  padding0: {
    paddingTop: '0',
    paddingBottom: '0',
  },
  navLink: {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  footerNavLink: {
    color: '#fff',
    fontSize: '12px',
    paddingRight: '1rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  footerText: {
    color: '#fff',
    fontSize: '12px',
    paddingRight: '1rem',
  },
  listItemIcon: {
    minWidth: 'auto',
    cursor: 'pointer',
  },
  closeIconListItem: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
    color: '#fff',
    paddingLeft: '0',
    paddingRight: '0',
  },
  closeIcon: {
    color: '#fff',
    fontSize: '2rem',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    fontSize: '2rem',
    width: '50%',
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 8,
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: '#fff',
  },
  divider: {
    width: '100%',
  },
  dFlex: {
    display: 'flex',
  },
  footerLi: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  padRight0: {
    paddingRight: '0',
  },
});

const SidebarNav = ({ pages, onClose, className, ...rest }) => {
  const classes = useStyles();

  const links = pages.links;

  const { services } = links.children;

  let footerPages = services.footerPages;

  const [leftSidebarData, setLeftSidebarData] = useState({
    title: 'Rent a bike in Amsterdam',
    subTitle: `Are you ready for it? Be careful,
                before you know it you'll be spending all your free time on a
                bike!`,
  });

  let title = leftSidebarData.title;
  let subTitle = leftSidebarData.subTitle;

  const MenuGroup = ({ item }) => (
    <List>
      {item.pages.map((link, i) => (
        <ListItem
          onMouseEnter={e => updateLeftMenu(e, link.page)}
          disableGutters
          key={i}
          className={classes.menuGroupItem}
        >
          <Typography
            variant="body2"
            component={'a'}
            href={link.href}
            className={clsx(classes.navLink, 'submenu-item')}
            color="textPrimary"
          >
            {link.page}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  const updateLeftMenu = (e, pageTitle) => {
    e.stopPropagation();
    const { services } = links.children;
    services.pages.forEach(item => {
      if (item.page === pageTitle) {
        setLeftSidebarData({
          title: item.title,
          subTitle: item.subTitle,
        });
      }
    });
  };

  const AllPages = () => {
    const { services } = links.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
        </div>
      </div>
    );
  };

  return (
    <>
      <Section className={clsx(classes.padding0)}>
        <List className={classes.dFlex}>
          <ListItem>
            <a href="/" title="Tour de Amsterdam Home">
              <Image
                src="https://assets.it22.nl/tda/logo_white.png"
                alt="Tour de Amsterdam Logo"
                lazy={true}
              />
            </a>
          </ListItem>
          <ListItem
            className={classes.closeIconListItem}
            onClick={() => onClose()}
          >
            <ListItemIcon title="Close Menu" className={classes.listItemIcon}>
              <CloseIcon className={classes.closeIcon} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Section>

      <Section className={classes.padding0}>
        <List {...rest} className={clsx(classes.dFlex)}>
          <ListItem className={classes.titleSection}>
            <Typography className={classes.menuItem} variant="h6" gutterBottom>
              {title}
            </Typography>

            <Typography className={classes.subtitle} gutterBottom>
              {subTitle}
            </Typography>
          </ListItem>

          <ListItem className={classes.listItem}>
            <AllPages />
          </ListItem>
        </List>
      </Section>

      {/* Footer */}
      <Section className={classes.padding0}>
        <List {...rest} className={clsx(classes.footer)}>
          <ListItem>
            {footerPages.map((link, i) => (
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
              src="https://assets.it22.nl/tda/payment_options_white.png"
              alt="Payment Options"
              className={classes.paymentOptionImg}
              lazy={true}
            />
          </ListItem>
          <ListItem
            className={clsx(
              classes.footerLi,
              classes.flexEnd,
              classes.padRight0,
            )}
          >
            <Typography
              variant="body2"
              component={'a'}
              href="#"
              className={clsx(
                classes.footerNavLink,
                classes.padding0,
                'submenu-item',
              )}
              color="textPrimary"
            >
              <Image
                src="https://assets.it22.nl/tda/icon-fb.png"
                alt="FB Icon"
                lazy={true}
                className={classes.footerText}
              />
            </Typography>

            <Typography
              variant="body2"
              component={'a'}
              href="#"
              className={clsx(
                classes.footerNavLink,
                classes.padRight0,
                'submenu-item',
              )}
              color="textPrimary"
            >
              <Image
                src="https://assets.it22.nl/tda/icon-youtube.png"
                alt="Youtube Icon"
                lazy={true}
              />
            </Typography>
          </ListItem>
        </List>
      </Section>
    </>
  );
};

export default SidebarNav;
