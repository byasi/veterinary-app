import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../../components/browse-layout';
import { MainLayout } from '../../../components/main-layout';
import { WidgetPreviewer } from '../../../components/widget-previewer';
import { DetailList1 } from '../../../components/widgets/detail-lists/detail-list-1';
import { DetailList2 } from '../../../components/widgets/detail-lists/detail-list-2';
import { DetailList3 } from '../../../components/widgets/detail-lists/detail-list-3';
import { DetailList4 } from '../../../components/widgets/detail-lists/detail-list-4';
import { DetailList5 } from '../../../components/widgets/detail-lists/detail-list-5';
import { DetailList6 } from '../../../components/widgets/detail-lists/detail-list-6';
import { DetailList7 } from '../../../components/widgets/detail-lists/detail-list-7';
import { DetailList8 } from '../../../components/widgets/detail-lists/detail-list-8';
import { gtm } from '../../../lib/gtm';

const BrowseDetailLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Detail Lists | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <WidgetPreviewer
            element={<DetailList1 />}
            name="Currency balance card"
          />
          <WidgetPreviewer
            element={<DetailList2 />}
            name="Contact details card"
          />
          <WidgetPreviewer
            element={<DetailList3 />}
            name="Invoices details card"
          />
          <WidgetPreviewer
            element={<DetailList4 />}
            name="Order info"
          />
          <WidgetPreviewer
            element={<DetailList5 />}
            name="Order info card"
          />
          <WidgetPreviewer
            element={<DetailList6 />}
            name="Project information card"
          />
          <WidgetPreviewer
            element={<DetailList7 />}
            name="Project details card"
          />
          <WidgetPreviewer
            element={<DetailList8 />}
            name="About card"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseDetailLists.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseDetailLists;
