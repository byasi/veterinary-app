import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { WidgetPreviewer } from '../../components/widget-previewer';
import { Modal1 } from '../../components/widgets/modals/modal-1';
import { Modal2 } from '../../components/widgets/modals/modal-2';
import { Modal3 } from '../../components/widgets/modals/modal-3';
import { Modal4 } from '../../components/widgets/modals/modal-4';
import { Modal5 } from '../../components/widgets/modals/modal-5';
import { Modal6 } from '../../components/widgets/modals/modal-6';
import { Modal7 } from '../../components/widgets/modals/modal-7';
import { Modal8 } from '../../components/widgets/modals/modal-8';
import { Modal9 } from '../../components/widgets/modals/modal-9';
import { Modal10 } from '../../components/widgets/modals/modal-10';
import { Modal11 } from '../../components/widgets/modals/modal-11';
import { Modal12 } from '../../components/widgets/modals/modal-12';
import { gtm } from '../../lib/gtm';

export const BrowseModals = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Modals | Material Kit Pro
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
            element={<Modal1 />}
            name="Modal 1"
          />
          <WidgetPreviewer
            element={<Modal2 />}
            name="Modal 2"
          />
          <WidgetPreviewer
            element={<Modal3 />}
            name="Modal 3"
          />
          <WidgetPreviewer
            element={<Modal4 />}
            name="Modal 4"
          />
          <WidgetPreviewer
            element={<Modal5 />}
            name="Modal 5"
          />
          <WidgetPreviewer
            element={<Modal6 />}
            name="Modal 6"
          />
          <WidgetPreviewer
            element={<Modal7 />}
            name="Modal 7"
          />
          <WidgetPreviewer
            element={<Modal8 />}
            name="Modal 8"
          />
          <WidgetPreviewer
            element={<Modal9 />}
            name="Modal 9"
          />
          <WidgetPreviewer
            element={<Modal10 />}
            name="Modal 10"
          />
          <WidgetPreviewer
            element={<Modal11 />}
            name="Modal 11"
          />
          <WidgetPreviewer
            element={<Modal12 />}
            name="Modal 12"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseModals.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseModals;
