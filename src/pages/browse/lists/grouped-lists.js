import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../../components/browse-layout';
import { MainLayout } from '../../../components/main-layout';
import { WidgetPreviewer } from '../../../components/widget-previewer';
import { GroupedList1 } from '../../../components/widgets/grouped-lists/grouped-list-1';
import { GroupedList2 } from '../../../components/widgets/grouped-lists/grouped-list-2';
import { GroupedList3 } from '../../../components/widgets/grouped-lists/grouped-list-3';
import { GroupedList4 } from '../../../components/widgets/grouped-lists/grouped-list-4';
import { GroupedList5 } from '../../../components/widgets/grouped-lists/grouped-list-5';
import { GroupedList6 } from '../../../components/widgets/grouped-lists/grouped-list-6';
import { GroupedList7 } from '../../../components/widgets/grouped-lists/grouped-list-7';
import { GroupedList8 } from '../../../components/widgets/grouped-lists/grouped-list-8';
import { GroupedList9 } from '../../../components/widgets/grouped-lists/grouped-list-9';
import { GroupedList10 } from '../../../components/widgets/grouped-lists/grouped-list-10';
import { GroupedList11 } from '../../../components/widgets/grouped-lists/grouped-list-11';
import { gtm } from '../../../lib/gtm';

const BrowseGroupedLists = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Grouped Lists | Material Kit Pro
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
            element={<GroupedList1 />}
            name="List"
          />
          <WidgetPreviewer
            element={<GroupedList2 />}
            name="Basic list"
          />
          <WidgetPreviewer
            element={<GroupedList3 />}
            name="Basic list"
          />
          <WidgetPreviewer
            element={<GroupedList4 />}
            name="Basic list"
          />
          <WidgetPreviewer
            element={<GroupedList5 />}
            name="Multiline list with donut chart"
          />
          <WidgetPreviewer
            element={<GroupedList6 />}
            name="Basic list"
          />
          <WidgetPreviewer
            element={<GroupedList7 />}
            name="Basic list with side avatars"
          />
          <WidgetPreviewer
            element={<GroupedList8 />}
            name="Basic list with side avatars"
          />
          <WidgetPreviewer
            element={<GroupedList9 />}
            name="Multiline list with rating bar"
          />
          <WidgetPreviewer
            element={<GroupedList10 />}
            name="Basic list with side icon"
          />
          <WidgetPreviewer
            element={<GroupedList11 />}
            name="Basic multiline list"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseGroupedLists.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseGroupedLists;
