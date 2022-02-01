import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import 'react-date-range/dist/styles.css'; // main style file
import InvoiceDetailsView from './editEmail/index';
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  SvgIcon,
  Table,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  makeStyles,
  Switch,
  InputLabel,
  NativeSelect,
  Grid,
  Divider,
  Typography
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Trash2 as TrashIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Edit
} from 'react-feather';

import Image from 'src/components/Image';

import moment from 'moment';

const applyFilters = (emails, query, filters) => {
  return emails.filter(email => {
    let matches = true;

    if (query) {
      const properties = ['name', 'email'];
      let containsQuery = false;

      properties.forEach(property => {
        if (
          email.customer[property].toLowerCase().includes(query.toLowerCase())
        ) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    if (filters.status && email.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (emails, page, limit) => {
  return emails.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles(theme => ({
  root: {
    color: '#263238',
    width: '100%',
    '& .MuiTablePagination-selectIcon': {
      color: '#263238 !important'
    }
  },
  queryField: {},
  statusField: {
    flexBasis: 200
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    width: '100%',
    zIndex: 2
  },
  leftButtonsWrapper: {
    paddingLeft: 4
  },
  rightButtonsWrapper: {
    paddingRight: 4
  },
  textField: {
    height: 40
  },
  bulkAction: {
    marginLeft: theme.spacing(2),
    height: 40,
    color: '#fff',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14)',
    borderRadius: 4
  },
  editAction: {
    background: '#6F6F6F',
    borderColor: '#6F6F6F',
    '&:hover': {
      color: '#6F6F6F',
      background: '#fff'
    }
  },
  deleteAction: {
    background: '#fff',
    borderColor: '#6F6F6F',
    color: '#263238',
    '&:hover': {
      background: '#6F6F6F',
      color: '#fff'
    },
    pdfAction: {
      background: '#fff',
      borderColor: '#6F6F6F',
      color: '#263238',
      '&:hover': {
        background: '#ffff',
        color: '#DF1683'
      }
    }
  },
  addNewemail: {
    height: 40
  },
  thumbnail: {
    paddingRight: 20
  },
  searchIcon: {
    color: '#263238'
  },
  pdfPicture: {
    color: 'black',
    marginLeft: '10%',
    width: '100%',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main
    }
  }
}));

const EmailTemplates = ({
  className,
  openModal,
  setOpenModal,
  template,
  openDeleteModal,
  setOpenDeleteModal,
  setAddOpenModal,
  addOpenModal,
  emails,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedemails, setSelectedemails] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    status: null
  });

  var isPublishedCheckboxes = emails.reduce((item, email) => {
    item[`isPublished${email.id}`] = email.isPublished;
    return item;
  }, {});

  const [publishedCheckboxes, setPublishedCheckboxes] = React.useState(
    isPublishedCheckboxes
  );

  const [filtersClass, setFiltersClass] = useState('flex-end');

  const handleQueryChange = event => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleChange = event => {
    setPublishedCheckboxes({
      ...publishedCheckboxes,
      [event.target.id]: event.target.checked
    });
  };

  const [age, setAge] = React.useState('');

  const handleModalClose = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    setOpenDeleteModal(false);
  };

  const handleSelectAllemails = event => {
    setFiltersClass(event.target.checked ? 'space-between' : 'flex-end');
    setSelectedemails(
      event.target.checked ? emails.map(email => email.id) : []
    );
  };

  const handleSelectOneemail = (event, emailId) => {
    if (!selectedemails.includes(emailId)) {
      setFiltersClass('space-between');
      setSelectedemails(prevSelected => [...prevSelected, emailId]);
    } else {
      setFiltersClass('flex-end');
      setSelectedemails(prevSelected =>
        prevSelected.filter(id => id !== emailId)
      );
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value));
  };

  const handleClickDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  };

  // Usually query is done on backend with indexing solutions
  const filteredemails = applyFilters(emails, query, filters);
  const paginatedemails = applyPagination(filteredemails, page, limit);
  const enableBulkOperations = selectedemails.length > 0;
  const selectedSomeemails =
    selectedemails.length > 0 && selectedemails.length < emails.length;
  const selectedAllemails = selectedemails.length === emails.length;

  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);

  const [emailID, setEmailID] = useState();
  const [emailData, setEmailData] = useState([]);

  const handleClickModalOpen = (id, data) => {
    setEmailID(id);
    setEmailData(data);
    setOpenModal(true);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <br />

      <Box display="flex" justifyContent={filtersClass}>
        {enableBulkOperations && (
          <Box
            className={classes.leftButtonsWrapper}
            display="flex"
            justifyContent="flex-start"
            p={2}
          >
            <div className={classes.bulkOperations}>
              <div className={classes.bulkActions}>
                <Checkbox
                  checked={selectedAllemails}
                  indeterminate={selectedSomeemails}
                  onChange={handleSelectAllemails}
                />

                <Button
                  onClick={handleClickDeleteModalOpen}
                  variant="outlined"
                  className={clsx(classes.bulkAction, classes.deleteAction)}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <TrashIcon />
                    </SvgIcon>
                  }
                >
                  Delete
                </Button>
              </div>
            </div>
          </Box>
        )}
      </Box>

      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAllemails}
                    indeterminate={selectedSomeemails}
                    onChange={handleSelectAllemails}
                  />
                </TableCell>
                <TableCell>Naam</TableCell>
                <TableCell>Body </TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedemails.map(email => {
                if (all) {
                  const isemailSelected = selectedemails.includes(email.id);
                  const is_reviewed_img = email.is_reviewed
                    ? 'reviewed-passed.png'
                    : 'reviewed-rejected.png';

                  return (
                    <TableRow hover key={email.id} selected={isemailSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isemailSelected}
                          onChange={event =>
                            handleSelectOneemail(event, email.id)
                          }
                          value={isemailSelected}
                        />
                      </TableCell>
                      <TableCell
                        onClick={() => handleClickModalOpen(email.id, email)}
                      >
                        <Box display="flex" alignItems="center">
                          {email.naam}
                        </Box>
                      </TableCell>
                      <TableCell
                        style={{ width: '50%' }}
                        onClick={() => handleClickModalOpen(email.id, email)}
                      >
                        <Box display="flex" alignItems="center">
                          {email.body}
                        </Box>
                      </TableCell>

                      <TableCell
                        onClick={() => handleClickModalOpen(email.id, email)}
                      >
                        <Box display="flex" alignItems="center">
                          {moment(email.updatedDate).format('DD MMM, YYYY')}
                        </Box>
                      </TableCell>

                      <TableCell
                        onClick={() => handleClickModalOpen(email.id, email)}
                      >
                        <Box display="flex" alignItems="start">
                          <div className={classes.pdfPicture}>
                            <Edit />
                          </div>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }
                if (active && email.status == 'Active') {
                  const isemailSelected = selectedemails.includes(email.id);
                  const is_reviewed_img = email.is_reviewed
                    ? 'reviewed-passed.png'
                    : 'reviewed-rejected.png';

                  return (
                    <TableRow hover key={email.id} selected={isemailSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isemailSelected}
                          onChange={event =>
                            handleSelectOneemail(event, email.id)
                          }
                          value={isemailSelected}
                        />
                      </TableCell>
                    </TableRow>
                  );
                }
                if (inactive && email.status == 'Inactive') {
                  const isemailSelected = selectedemails.includes(email.id);
                  const is_reviewed_img = email.is_reviewed
                    ? 'reviewed-passed.png'
                    : 'reviewed-rejected.png';

                  return (
                    <TableRow
                      onClick={() => handleClickModalOpen(email.id, email)}
                      hover
                      key={email.id}
                      selected={isemailSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isemailSelected}
                          onChange={event =>
                            handleSelectOneemail(event, email.id)
                          }
                          value={isemailSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Image
                            className={classes.thumbnail}
                            src={email.email_num}
                          />{' '}
                          {email.naam}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {email.email_num}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center">
                          {email.name}
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="center"></Box>
                      </TableCell>

                      <TableCell>
                        <Box display="flex" alignItems="start">
                          --
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>

          <Dialog
            open={openDeleteModal}
            onClose={handleModalClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              <h3>Weet je het zeker?</h3>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Wil je echt e-mailrecord(s) verwijderen?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleModalClose}
                className={classes.cancelBtn}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClickDeleteModalOpen}
                color="primary"
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        labelRowsPerPage="Rijen per pagina"
        component="div"
        count={filteredemails.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />

      <InvoiceDetailsView
        openModal={openModal}
        setOpenModal={setOpenModal}
        emailData={emailData}
      />

      {/* Delete emails Modal */}
    </Card>
  );
};

EmailTemplates.propTypes = {
  className: PropTypes.string,
  emails: PropTypes.array.isRequired
};

EmailTemplates.defaultProps = {
  emails: []
};

export default EmailTemplates;
