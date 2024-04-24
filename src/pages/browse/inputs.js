import { useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { WidgetPreviewer } from '../../components/widget-previewer';
import { InputCheckbox } from '../../components/widgets/inputs/input-checkbox';
import { InputRadio } from '../../components/widgets/inputs/input-radio';
import { InputSwitch } from '../../components/widgets/inputs/input-switch';
import { InputTextField } from '../../components/widgets/inputs/input-text-field';
import { InputMixed } from '../../components/widgets/inputs/input-mixed';
import { gtm } from '../../lib/gtm';

const BrowseInputs = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse: Inputs | Material Kit Pro
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
            element={<InputCheckbox />}
            name="Checkbox with additional text"
          />
          <WidgetPreviewer
            element={<InputRadio />}
            name="Radio button with additional text"
          />
          <WidgetPreviewer
            element={<InputSwitch />}
            name="Switch with top description"
          />
          <WidgetPreviewer
            element={<InputTextField />}
            name="Text fields integrated in a form"
          />
          <WidgetPreviewer
            element={<InputMixed />}
            name="Mixed input form"
          />
        </Container>
      </Box>
    </>
  );
};

BrowseInputs.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default BrowseInputs;
