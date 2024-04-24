import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const COL1_WIDTH = 60;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: 24
  },
  h4: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1.235
  },
  h6: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.6
  },
  subtitle2: {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1.57
  },
  body2: {
    fontSize: 10,
    lineHeight: 1.43
  },
  gutterBottom: {
    marginBottom: 4
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  brand: {
    height: 32,
    width: 32
  },
  company: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
  },
  references: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32
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
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    flexDirection: 'row'
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

export const InvoicePDF = (props) => {
  const { invoice } = props;

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.header}>
          <View>
            <Image
              source="/static/logo.jpg"
              style={styles.brand}
            />
            <Text style={styles.h6}>
              www.devias.io
            </Text>
          </View>
          <View>
            <Text style={styles.h4}>
              {invoice.status}
            </Text>
            <Text style={styles.subtitle2}>
              Invoice # 3593865
            </Text>
          </View>
        </View>
        <View style={styles.company}>
          <View>
            <Text style={styles.body2}>
              Street King William, 123
            </Text>
            <Text style={styles.body2}>
              Level 2, C, 442456
            </Text>
            <Text style={styles.body2}>
              San Francisco, CA, USA
            </Text>
          </View>
          <View>
            <Text style={styles.body2}>
              Company No. 4675933
            </Text>
            <Text style={styles.body2}>
              EU VAT No. 949 67545 45
            </Text>
          </View>
          <View>
            <Text style={styles.body2}>
              accounts@devias.io
            </Text>
            <Text style={styles.body2}>
              (+40) 652 3456 23
            </Text>
          </View>
        </View>
        <View style={styles.references}>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Due Date
            </Text>
            <Text style={styles.body2}>
              {format(invoice.dueDate, 'dd MMM yyyy')}
            </Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Date of issue
            </Text>
            <Text style={styles.body2}>
              {format(invoice.issueDate, 'dd MMM yyyy')}
            </Text>
          </View>
          <View>
            <Text style={[styles.subtitle2, styles.gutterBottom]}>
              Number
            </Text>
            <Text style={styles.body2}>
              {invoice.number}
            </Text>
          </View>
        </View>
        <View style={styles.billing}>
          <Text style={[styles.subtitle2, styles.gutterBottom]}>
            Billed to
          </Text>
          <Text style={styles.body2}>
            Tracey Herman
          </Text>
          <Text style={styles.body2}>
            Countdown Grey Lynn
          </Text>
          <Text style={styles.body2}>
            6934656584231
          </Text>
          <Text style={styles.body2}>
            271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand
          </Text>
        </View>
        <View style={styles.items}>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1}>
                  <Text style={styles.h6}>
                    Description
                  </Text>
                </View>
                <View style={styles.tableCellN} />
                <View style={styles.tableCellN}>
                  <Text style={[styles.h6, styles.alignRight]}>
                    Price
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tableBody}>
              {invoice.items.map((item) => (
                <View
                  style={styles.tableRow}
                  key={item.id}
                >
                  <View style={styles.tableCell1}>
                    <Text style={styles.body2}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={styles.tableCellN} />
                  <View style={styles.tableCellN}>
                    <Text style={[styles.body2, styles.alignRight]}>
                      {numeral(item.unitAmount)
                        .format(`${item.currency}0,0.00`)}
                    </Text>
                  </View>
                </View>
              ))}
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Subtotal
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.subtotalAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Taxes
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.taxAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={styles.tableCell1} />
                <View style={styles.tableCellN}>
                  <Text style={styles.body2}>
                    Total
                  </Text>
                </View>
                <View style={styles.tableCellN}>
                  <Text style={[styles.body2, styles.alignRight]}>
                    {numeral(invoice.totalAmount)
                      .format(`${invoice.currency}0,0.00`)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.notes}>
          <Text style={[styles.h6, styles.gutterBottom]}>
            Notes
          </Text>
          <Text style={styles.body2}>
            Please make sure you have the right bank registration number
            as I
            had issues before and make sure you guys cover transfer
            expenses.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

InvoicePDF.propTypes = {
    invoice: PropTypes.object.isRequired
};
