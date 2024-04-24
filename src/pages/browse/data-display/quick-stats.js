import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../../components/browse-layout';
import { MainLayout } from '../../../components/main-layout';
import { WidgetPreviewer } from '../../../components/widget-previewer';
import { QuickStats1 } from '../../../components/widgets/quick-stats/quick-stats-1';
import { QuickStats2 } from '../../../components/widgets/quick-stats/quick-stats-2';
import { QuickStats3 } from '../../../components/widgets/quick-stats/quick-stats-3';
import { QuickStats4 } from '../../../components/widgets/quick-stats/quick-stats-4';
import { QuickStats5 } from '../../../components/widgets/quick-stats/quick-stats-5';
import { QuickStats6 } from '../../../components/widgets/quick-stats/quick-stats-6';
import { QuickStats7 } from '../../../components/widgets/quick-stats/quick-stats-7';
import { QuickStats8 } from '../../../components/widgets/quick-stats/quick-stats-8';
import { gtm } from '../../../lib/gtm';

const BrowseQuickStats = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Quick Stats | Material Kit Pro
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
            element={<QuickStats1 />}
            name="Stat card with donut chart"
          />
          <WidgetPreviewer
            element={<QuickStats2 />}
            name="Stat card with donut chart"
          />
          <WidgetPreviewer
            element={<QuickStats3 />}
            name="Stat card with multiple sections"
          />
          <WidgetPreviewer
            element={<QuickStats4 />}
            name="Stat card with multiple sections and chips"
          />
          <WidgetPreviewer
            element={<QuickStats5 />}
            name="Stat card with area charts"
          />
          <WidgetPreviewer
            element={<QuickStats6 />}
            name="Stat card with circular charts"
          />
          <WidgetPreviewer
            element={<QuickStats7 />}
            name="Progress bar card"
          />
          <WidgetPreviewer
            element={<QuickStats8 />}
            name="Card with line chart"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseQuickStats.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseQuickStats;
