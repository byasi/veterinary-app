import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../../components/browse-layout';
import { MainLayout } from '../../../components/main-layout';
import { WidgetPreviewer } from '../../../components/widget-previewer';
import { Table1 } from '../../../components/widgets/tables/table-1';
import { Table2 } from '../../../components/widgets/tables/table-2';
import { Table3 } from '../../../components/widgets/tables/table-3';
import { Table4 } from '../../../components/widgets/tables/table-4';
import { Table5 } from '../../../components/widgets/tables/table-5';
import { Table6 } from '../../../components/widgets/tables/table-6';
import { Table7 } from '../../../components/widgets/tables/table-7';
import { Table8 } from '../../../components/widgets/tables/table-8';
import { Table9 } from '../../../components/widgets/tables/table-9';
import { Table10 } from '../../../components/widgets/tables/table-10';
import { Table11 } from '../../../components/widgets/tables/table-11';
import { gtm } from '../../../lib/gtm';

const BrowseTables = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Tables | Material Kit Pro
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
            element={<Table1 />}
            name="Multilined with status chips"
          />
          <WidgetPreviewer
            element={<Table2 />}
            name="Multilined with avatars"
          />
          <WidgetPreviewer
            element={<Table3 />}
            name="Table with tabs, search bar and drop-down select box"
          />
          <WidgetPreviewer
            element={<Table4 />}
            name="Multiline"
          />
          <WidgetPreviewer
            element={<Table5 />}
            name="Table with search bar, select box and toggles"
          />
          <WidgetPreviewer
            element={<Table6 />}
            name="Table with search bar and select box"
          />
          <WidgetPreviewer
            element={<Table7 />}
            name="Basic table"
          />
          <WidgetPreviewer
            element={<Table8 />}
            name="Basic table"
          />
          <WidgetPreviewer
            element={<Table9 />}
            name="Basic table"
          />
          <WidgetPreviewer
            element={<Table10 />}
            name="Multilined table"
          />
          <WidgetPreviewer
            element={<Table11 />}
            name="Basic table"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseTables.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseTables;
