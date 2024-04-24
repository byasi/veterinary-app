import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { WidgetPreviewer } from '../../components/widget-previewer';
import { Buttons1 } from '../../components/widgets/buttons/buttons-1';
import { Buttons2 } from '../../components/widgets/buttons/buttons-2';
import { Buttons3 } from '../../components/widgets/buttons/buttons-3';
import { gtm } from '../../lib/gtm';

const BrowseButtons = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Buttons | Material Kit Pro
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
            element={<Buttons1 />}
            name="Simple buttons"
          />
          <WidgetPreviewer
            element={<Buttons2 />}
            name="Buttons with text and icon"
          />
          <WidgetPreviewer
            element={<Buttons3 />}
            name="Button groups"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseButtons.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseButtons;
