import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Button} from 'material-ui';
import Check from 'material-ui-icons/Check'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, free, standard, premium) {
  id += 1;
  return { id, name, free, standard, premium};
}

const data = [
  createData('Integration Documentation', true, true, true),
  createData('Email Support', true, true, true),
  createData('Architecture Review', false, true, true),
  createData('Hardware Review', false, true, true),
  createData('On-site Consultation', false, false, true),
  createData('Dedicated Project Manager', false, false, true),
  createData('Service Response Time', false, '1 day', '1 hour'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell >Service</CustomTableCell>
            <CustomTableCell numeric>Free</CustomTableCell>
            <CustomTableCell numeric>Standard</CustomTableCell>
            <CustomTableCell numeric>Premium</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric style={{}}>{n.free == true ? <Check color='secondary'/> : n.free}</CustomTableCell>
                <CustomTableCell numeric style={{paddingRight: 68}}>{n.standard == true ? <Check color='secondary'/> : n.standard}</CustomTableCell>
                <CustomTableCell numeric style={{paddingRight: 35}}>{n.premium == true ? <Check color='secondary'/> : n.premium}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
