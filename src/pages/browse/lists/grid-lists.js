import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../../components/browse-layout';
import { MainLayout } from '../../../components/main-layout';
import { WidgetPreviewer } from '../../../components/widget-previewer';
import { GridList1 } from '../../../components/widgets/grid-lists/grid-list-1';
import { GridList2 } from '../../../components/widgets/grid-lists/grid-list-2';
import { GridList3 } from '../../../components/widgets/grid-lists/grid-list-3';
import { GridList4 } from '../../../components/widgets/grid-lists/grid-list-4';
import { GridList5 } from '../../../components/widgets/grid-lists/grid-list-5';
import { GridList6 } from '../../../components/widgets/grid-lists/grid-list-6';
import { gtm } from '../../../lib/gtm';

const BrowseGridLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Grid Lists | Material Kit Pro
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
            element={<GridList1 />}
            name="Grid list with image"
          />
          <WidgetPreviewer
            element={<GridList2 />}
            name="Mixed grid list"
          />
          <WidgetPreviewer
            element={<GridList3 />}
            name="Grid list with bottom button"
          />
          <WidgetPreviewer
            element={<GridList4 />}
            name="Grid list with avatar and cover picture "
          />
          <WidgetPreviewer
            element={<GridList5 />}
            name="Grid list with picture and bottom buttons"
          />
          <WidgetPreviewer
            element={<GridList6 />}
            name="Grid list with picture and bottom buttons"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseGridLists.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseGridLists;
