import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import numeral from 'numeral';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet
} from '@react-pdf/renderer';

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    padding: 24
  },
  h1: {
    fontSize: 24,
    fontWeight: 500
  },
  h5: {
    fontSize: 12,
    fontWeight: 500
  },
  h6: {
    fontSize: 10,
    fontWeight: 500
  },
  body1: {
    fontSize: 9,
    lineHeight: 1.5
  },
  body2: {
    fontSize: 8,
    lineHeight: 1.5
  },
  mb1: {
    marginBottom: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: {
    height: 24,
    width: 24
  },
  company: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  references: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  billing: {
    marginTop: 32
  },
  items: {
    marginTop: 32
  },
  notes: {
    marginTop: 32
  },
  table: {
    display: 'flex',
    width: 'auto'
  },
  tableHeader: {},
  tableBody: {},
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    borderStyle: 'solid'
  },
  tableCell1: {
    padding: 6,
    width: `${COL1_WIDTH}%`
  },
  tableCellN: {
    padding: 6,
    width: `${COLN_WIDTH}%`
  },
  alignRight: {
    textAlign: 'right'
  }
});

const InvoicePDF = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
      </Page>
    </Document>
  );
}

InvoicePDF.propTypes = {
  invoice: PropTypes.object.isRequired
};

export default InvoicePDF;
