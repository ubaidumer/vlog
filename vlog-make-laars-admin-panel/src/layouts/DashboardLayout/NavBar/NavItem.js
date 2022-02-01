import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, Collapse, ListItem, makeStyles } from '@material-ui/core';
import Image from 'src/components/Image';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
  expandLessIcon: {
    color: 'white'
  },
  expandMoreIcon: {
    color: 'white'
  },
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    fill: 'white'
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    '&:hover': {
      background: '#DF1683',
      '& $title': {
        color: 'white !important'
      },
      '& .hello path': {
        fill: 'white !important'
      }
    }
  },
  button: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontSize: 16
  },
  buttonLeaf: {
    color: theme.palette.text.secondary,
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  },
  image: {
    paddingRight: 10,
    width: 30,
    height: 20
  },
  img: {
    fill: 'white'
  },
  hello: {
    fill: 'white'
  },
  imageWrapper: {
    width: 30,
    height: 20,
    paddingBottom: 20
  },
  title: {
    marginRight: 'auto',
    color: '#24272A'
  },
  active: {
    color: 'white',
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.secondary.main
    }
  }
}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon,
  info: Info,
  open: openProp,
  id,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button className={classes.button} onClick={handleToggle} style={style}>
          <div className={classes.imageWrapper}>
            <img className={classes.img} src={icon} />
          </div>
          <span className={classes.title}>{title}</span>
          {open ? (
            <ExpandLessIcon className={classes.expandLessIcon} />
          ) : (
            <ExpandMoreIcon className={classes.expandMoreIcon} />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem
      className={clsx(classes.itemLeaf, className)}
      disableGutters
      key={`${id}-${Math.floor(Math.random() * 10 + 1)}`}
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={RouterLink}
        exact
        style={style}
        to={href}
      >
        <div className={classes.imageWrapper}>{icon}</div>
        <span className={classes.title}>{title}</span>
        {Info && <Info />}
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.object,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem;
