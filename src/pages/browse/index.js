import { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Grid, Box, Card, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BrowseLayout } from '../../components/browse-layout';
import { MainLayout } from '../../components/main-layout';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';
import { gtm } from '../../lib/gtm';

const getSections = (mode) => ([
  {
    title: 'Data Display',
    items: [
      {
        title: 'Detail Lists',
        subtitle: '8 components',
        image: `/static/browse/data-display-detail-list_${mode}.png`,
        path: '/browse/data-display/detail-lists'
      },
      {
        title: 'Tables',
        subtitle: '11 components',
        image: `/static/browse/data-display-tables_${mode}.png`,
        path: '/browse/data-display/tables'
      },
      {
        title: 'Quick Stats',
        subtitle: '8 components',
        image: `/static/browse/data-display-quick-stats_${mode}.png`,
        path: '/browse/data-display/quick-stats'
      }
    ]
  },
  {
    title: 'Lists',
    items: [
      {
        title: 'Grouped Lists',
        subtitle: '11 components',
        image: `/static/browse/lists-grouped_${mode}.png`,
        path: '/browse/lists/grouped-lists'
      },
      {
        title: 'Grid Lists',
        subtitle: '6 components',
        image: `/static/browse/lists-grid_${mode}.png`,
        path: '/browse/lists/grid-lists'
      }
    ]
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Forms',
        subtitle: '17 components',
        image: `/static/browse/forms_${mode}.png`,
        path: '/browse/forms'
      }
    ]
  },
  {
    title: 'Overlays',
    items: [
      {
        title: 'Modals',
        subtitle: '12 components',
        image: `/static/browse/overlays-dialog_${mode}.png`,
        path: '/browse/modals'
      }
    ]
  },
  {
    title: 'Charts',
    items: [
      {
        title: 'Charts',
        subtitle: '12 components',
        image: `/static/browse/charts_${mode}.png`,
        path: '/browse/charts'
      }
    ]
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Buttons',
        subtitle: '',
        image: `/static/browse/base-buttons_${mode}.png`,
        path: '/browse/buttons'
      },
      {
        title: 'Typography',
        subtitle: '',
        image: `/static/browse/base-typography_${mode}.png`,
        path: '/browse/typography'
      },
      {
        title: 'Colors',
        subtitle: '',
        image: `/static/browse/base-colors_${mode}.png`,
        path: '/browse/colors'
      },
      {
        title: 'Inputs',
        subtitle: '',
        image: `/static/browse/base-inputs_${mode}.png`,
        path: '/browse/inputs'
      }
    ]
  }
]);

const Browse = () => {
  const theme = useTheme();
  const sections = getSections(theme.palette.mode);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Head>
        <title>
          Browse | Material Kit Pro
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
          {sections.map((section) => (
            <Grid
              key={`section-${section.title}`}
              container
              spacing={3}
              sx={{
                mt: 0,
                pb: 8,
                '& + &': {
                  borderTop: 1,
                  borderColor: 'divider',
                  pt: 5
                }
              }}
            >
              <Grid
                item
                lg={3}
                xs={12}
              >
                <Typography
                  sx={{ fontWeight: 600 }}
                  variant="h5"
                >
                  {section.title}
                </Typography>
              </Grid>
              <Grid
                container
                item
                lg={9}
                spacing={3}
                xs={12}
              >
                {section.items.map((item) => (
                  <Grid
                    item
                    key={`item-${item.title}`}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <NextLink
                      href={item.path}
                      passHref
                    >
                      <Card
                        component="a"
                                                target={item.newTab
                          ? '_blank'
                          : '_self'}
                        sx={{
                          display: 'block',
                          textDecoration: 'none',
                          gridColumn: {
                            xs: 'span 3',
                            sm: 'span 1'
                          }
                        }}
                        variant="outlined"
                      >
                        <Box sx={{ p: 2 }}>
                          <Box
                            sx={{
                              position: 'relative',
                              pt: 'calc(300 / 500 * 100%)',
                              '& img': {
                                height: 'auto',
                                position: 'absolute',
                                top: 0,
                                width: '100%'
                              }
                            }}
                          >
                            <img
                              alt=""
                              src={item.image}
                            />
                          </Box>
                          <Box
                            sx={{
                              alignItems: 'flex-end',
                              display: 'flex'
                            }}
                          >
                            <Typography
                              sx={{ mt: 2 }}
                              variant="subtitle2"
                            >
                              {item.title}
                            </Typography>
                            {item.newTab && (
                              <ExternalLinkIcon
                                sx={{
                                  color: 'text.secondary',
                                  ml: 1.5
                                }}
                                fontSize="small"
                              />
                            )}
                          </Box>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          >
                            {item.subtitle}
                          </Typography>
                        </Box>
                      </Card>
                    </NextLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>
    </>
  );
};

Browse.getLayout = (page) => (
  <MainLayout>
    <BrowseLayout>
      {page}
    </BrowseLayout>
  </MainLayout>
);

export default Browse;
