import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ExternalLink as ExternalLinkIcon } from '../../icons/external-link';

export const HomeDesigners = (props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: 15
      }}
      {...props}>
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          justifyContent="center"
          spacing={3}
        >
          <Grid
            item
            md={6}
            sm={8}
            xs={12}
          >
            <Box
              sx={{
                position: 'relative',
                pt: 'calc(960 / 1225 * 100%)',
                '& img': {
                  height: 'auto',
                  position: 'absolute',
                  top: 0,
                  width: '100%'
                }
              }}
            >
              <img
                alt="For designers"
                src={`/static/home/designers_${theme.palette.mode}.png`}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography variant="h3">
              For designers
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ my: 3 }}
              variant="subtitle1"
            >
              We &apos; ve included the source Figma files to Plus & Extended licenses so you can
              get creative! Build layouts with confidence.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                m: -1
              }}
            >
              <Button
                component="a"
                endIcon={<ExternalLinkIcon fontSize="small" />}
                href="https://www.figma.com/file/W9jfIqc2IkdZKh77yOjLm7/MKP-v5.0(preview)"
                size="large"
                sx={{ m: 1 }}
                target="_blank"
                variant="outlined"
              >
                Preview Figma
              </Button>
              <Button
                disabled
                endIcon={<ExternalLinkIcon fontSize="small" />}
                size="large"
                sx={{ m: 1 }}
                variant="outlined"
              >
                Preview Sketch
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
