import { useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  Link,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { invoiceApi } from '../../../__fake-api__/invoice-api';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout';
import { InvoicePDF } from '../../../components/dashboard/invoice/invoice-pdf';
import { InvoicePreview } from '../../../components/dashboard/invoice/invoice-preview';
import { useMounted } from '../../../hooks/use-mounted';
import { ArrowLeft as ArrowLeftIcon } from '../../../icons/arrow-left';
import { gtm } from '../../../lib/gtm';
import { getInitials } from '../../../utils/get-initials';

const InvoiceDetails = () => {
  const isMounted = useMounted();
  const [invoice, setInvoice] = useState(null);
  const [viewPDF, setViewPDF] = useState(false);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getInvoice = useCallback(async () => {
    try {
      const data = await invoiceApi.getInvoice();

      if (isMounted()) {
        setInvoice(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
      getInvoice();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  if (!invoice) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Dashboard: Invoice Details | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ mb: 3 }}>
            <Box sx={{ mb: 4 }}>
              <NextLink
                href="/dashboard/invoices"
                passHref
              >
                <Link
                  color="textPrimary"
                  variant="subtitle2"
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <ArrowBackIcon
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="subtitle2">
                      Invoices
                    </Typography>
                  </Box>
                </Link>
              </NextLink>
            </Box>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  sx={{
                    height: 42,
                    mr: 2,
                    width: 42
                  }}
                >
                  {getInitials(invoice.customer.name)}
                </Avatar>
                <div>
                  <Typography variant="h4">
                    {invoice.number}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {invoice.customer.name}
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid
                item
                sx={{ m: -1 }}
              >
                <Button
                  onClick={() => setViewPDF(true)}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Preview
                </Button>
                <PDFDownloadLink
                  document={<InvoicePDF invoice={invoice} />}
                  fileName="invoice"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    color="primary"
                    sx={{ m: 1 }}
                    variant="contained"
                  >
                    Download
                  </Button>
                </PDFDownloadLink>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
          </Box>
          <InvoicePreview invoice={invoice} />
        </Container>
      </Box>
      <Dialog
        fullScreen
        open={viewPDF}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Box
            sx={{
              backgroundColor: 'background.default',
              p: 2
            }}
          >
            <Button
              startIcon={<ArrowLeftIcon fontSize="small" />}
              onClick={() => setViewPDF(false)}
              variant="contained"
            >
              Back
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <PDFViewer
              height="100%"
              style={{ border: 'none' }}
              width="100%"
            >
              <InvoicePDF invoice={invoice} />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

InvoiceDetails.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default InvoiceDetails;
