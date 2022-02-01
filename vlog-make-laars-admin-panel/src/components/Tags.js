import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    alignItems: 'center'
  },
  chip: {
    margin: '22px 10px 0px 0px',
    borderRadius: 0
  },
  auto: {
    marginRight: 5
  }
}));
const top100Films = [
  { name: 'tag1' },
  { name: 'tag2' },
  { name: 'tag3' },
  { name: 'tag4' },
  { name: 'tag5' }
];

const Tags = () => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([]);
  const [t, setT] = React.useState({});
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleKey = e => {
    if (e.key === 'Enter') {
      let data = e.target.value;
      let i = Math.floor(Math.random() * (1000000000000 - 1) + 1);
      chipData.push({ key: i, label: data });
    }
  };
  return (
    <div className={classes.root}>
      <Autocomplete
        options={top100Films}
        getOptionLabel={option => option.name}
        style={{ width: '100%' }}
        renderInput={params => (
          <TextField {...params} label="Tags List" variant="outlined" />
        )}
        onKeyDown={handleKey}
        className={classes.auto}
      />
      {chipData.map(data => {
        return (
          <div key={data.key}>
            <Chip
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Tags;
