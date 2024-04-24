import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { WidgetPreviewer } from '../../components/widget-previewer';
import { Form1 } from '../../components/widgets/forms/form-1';
import { Form2 } from '../../components/widgets/forms/form-2';
import { Form3 } from '../../components/widgets/forms/form-3';
import { Form4 } from '../../components/widgets/forms/form-4';
import { Form5 } from '../../components/widgets/forms/form-5';
import { Form6 } from '../../components/widgets/forms/form-6';
import { Form7 } from '../../components/widgets/forms/form-7';
import { Form8 } from '../../components/widgets/forms/form-8';
import { Form9 } from '../../components/widgets/forms/form-9';
import { Form16 } from '../../components/widgets/forms/form-16';
import { Form15 } from '../../components/widgets/forms/form-15';
import { Form10 } from '../../components/widgets/forms/form-10';
import { Form11 } from '../../components/widgets/forms/form-11';
import { Form12 } from '../../components/widgets/forms/form-12';
import { Form13 } from '../../components/widgets/forms/form-13';
import { Form14 } from '../../components/widgets/forms/form-14';
import { gtm } from '../../lib/gtm';

const BrowseForms = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Forms | Material Kit Pro
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
            element={<Form1 />}
            name="Form with input fields and switches"
          />
          <WidgetPreviewer
            element={<Form2 />}
            name="Form with search bar and removable chips for filtering"
          />
          <WidgetPreviewer
            element={<Form3 />}
            name="Form with checkboxes"
          />
          <WidgetPreviewer
            element={<Form4 />}
            name="Basic input fields form"
          />
          <WidgetPreviewer
            element={<Form5 />}
            name="Form with input fields and switches"
          />
          <WidgetPreviewer
            element={<Form6 />}
            name="Mixed input field forms"
          />
          <WidgetPreviewer
            element={<Form7 />}
            name="Basic input fields form"
          />
          <WidgetPreviewer
            element={<Form8 />}
            name="Mixed input fields form"
          />
          <WidgetPreviewer
            element={<Form9 />}
            name="Form with radio button options"
          />
          <WidgetPreviewer
            element={<Form10 />}
            name="Basic form"
          />
          <WidgetPreviewer
            element={<Form11 />}
            name="Form with checkboxes and input fields"
          />
          <WidgetPreviewer
            element={<Form12 />}
            name="Form with select and input fields"
          />
          <WidgetPreviewer
            element={<Form13 />}
            name="Multi-section form"
          />
          <WidgetPreviewer
            element={<Form14 />}
            name="Mixed form"
          />
          <WidgetPreviewer
            element={<Form15 />}
            name="Basic input field"
          />
          <WidgetPreviewer
            element={<Form16 />}
            name="Form with input fields and checkbox"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseForms.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseForms;
