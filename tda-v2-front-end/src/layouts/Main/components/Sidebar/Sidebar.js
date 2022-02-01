import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Fade } from '@material-ui/core';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '100%',
    background: 'rgba(26, 42, 73, 0.75)',
    backdropFilter: 'blur(1px)',
  },
  root: {
    height: '100%',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}));

const Sidebar = ({ pages, open, variant, onClose, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={() => onClose()}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} onClose={onClose} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
