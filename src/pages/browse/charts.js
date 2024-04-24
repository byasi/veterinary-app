import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { WidgetPreviewer } from '../../components/widget-previewer';
import { Chart1 } from '../../components/widgets/charts/chart-1';
import { Chart2 } from '../../components/widgets/charts/chart-2';
import { Chart3 } from '../../components/widgets/charts/chart-3';
import { Chart4 } from '../../components/widgets/charts/chart-4';
import { Chart5 } from '../../components/widgets/charts/chart-5';
import { Chart6 } from '../../components/widgets/charts/chart-6';
import { Chart7 } from '../../components/widgets/charts/chart-7';
import { Chart8 } from '../../components/widgets/charts/chart-8';
import { Chart9 } from '../../components/widgets/charts/chart-9';
import { Chart10 } from '../../components/widgets/charts/chart-10';
import { Chart11 } from '../../components/widgets/charts/chart-11';
import { Chart12 } from '../../components/widgets/charts/chart-12';
import { gtm } from '../../lib/gtm';

const BrowseCharts = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Charts | Material Kit Pro
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
          <Box sx={{ mt: 3 }}>
            <WidgetPreviewer
              element={<Chart1 />}
              name="Chart 1"
            />
            <WidgetPreviewer
              element={<Chart2 />}
              name="Chart 2"
            />
            <WidgetPreviewer
              element={<Chart3 />}
              name="Chart 3"
            />
            <WidgetPreviewer
              element={<Chart4 />}
              name="Chart 4"
            />
            <WidgetPreviewer
              element={<Chart5 />}
              name="Chart 5"
            />
            <WidgetPreviewer
              element={<Chart6 />}
              name="Chart 6"
            />
            <WidgetPreviewer
              element={<Chart7 />}
              name="Chart 7"
            />
            <WidgetPreviewer
              element={<Chart8 />}
              name="Chart 8"
            />
            <WidgetPreviewer
              element={<Chart9 />}
              name="Chart 9"
            />
            <WidgetPreviewer
              element={<Chart10 />}
              name="Chart 10"
            />
            <WidgetPreviewer
              element={<Chart11 />}
              name="Chart 11"
            />
            <WidgetPreviewer
              element={<Chart12 />}
              name="Chart 12"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

BrowseCharts.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseCharts;
