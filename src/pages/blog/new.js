import { useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import { FileDropzone } from '../../components/file-dropzone';
import { QuillEditor } from '../../components/quill-editor';
import { ArrowLeft as ArrowLeftIcon } from '../../icons/arrow-left';
import { DotsVertical as DotsHorizontalIcon } from '../../icons/dots-vertical';
import { gtm } from '../../lib/gtm';
import { fileToBase64 } from '../../utils/file-to-base64';

const BlogPostCreate = () => {
  const [cover, setCover] = useState('/static/mock-images/covers/cover_4.jpeg');

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const handleDropCover = async ([file]) => {
    const data = await fileToBase64(file);
    setCover(data);
  };

  const handleRemove = () => {
    setCover(null);
  };

  return (
    <>
      <Head>
        <title>
          Blog: Post Create | Material Kit Pro
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <NextLink
            href="/dashboard"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowLeftIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink>
          <Typography
            variant="h3"
            sx={{ mt: 3 }}
          >
            Create post
          </Typography>
          <Card
            elevation={16}
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mb: 8,
              mt: 6,
              px: 3,
              py: 2
            }}
          >
            <Typography variant="subtitle1">
              Hello, Admin
            </Typography>
            <div>
              <NextLink
                href="/blog"
                passHref
              >
                <Button
                  component="a"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'inline-flex'
                    },
                    mr: 2
                  }}
                  variant="outlined"
                >
                  Cancel
                </Button>
              </NextLink>
              <NextLink
                href="/blog/1"
                passHref
              >
                <Button
                  component="a"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'inline-flex'
                    },
                    mr: 2
                  }}
                  variant="contained"
                >
                  Publish changes
                </Button>
              </NextLink>
              <IconButton>
                <DotsHorizontalIcon fontSize="small" />
              </IconButton>
            </div>
          </Card>
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h6">
                Basic details
              </Typography>
              <Box sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Post title"
                  name="title"
                />
                <Box sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    label="Short description"
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h6">
                Post cover
              </Typography>
              {cover ? (
                <Box
                  sx={{
                    backgroundImage: `url(${cover})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: 1,
                    height: 230,
                    mt: 3
                  }}
                />
              ) : (
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    border: 1,
                    borderRadius: 1,
                    borderStyle: 'dashed',
                    borderColor: 'divider',
                    height: 230,
                    mt: 3,
                    p: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="h6"
                  >
                    Select a cover image
                  </Typography>
                  <Typography
                    align="center"
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="subtitle1"
                  >
                    Image used for the blog post cover and also for Open Graph meta
                  </Typography>
                </Box>
              )}
              <Button
                onClick={handleRemove}
                sx={{ mt: 3 }}
                disabled={!cover}
              >
                Remove photo
              </Button>
              <Box sx={{ mt: 3 }}>
                <FileDropzone
                  accept="image/*"
                  maxFiles={1}
                  onDrop={handleDropCover}
                />
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h6">
                Content
              </Typography>
              <QuillEditor
                placeholder="Write something"
                sx={{
                  height: 330,
                  mt: 3
                }}
              />
            </CardContent>
          </Card>
          <Card sx={{ mt: 4 }}>
            <CardContent>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  lg={4}
                >
                  <Typography variant="h6">
                    Meta
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={8}
                >
                  <TextField
                    fullWidth
                    label="SEO title"
                    name="title"
                  />
                  <TextField
                    fullWidth
                    sx={{ mt: 3 }}
                    label="SEO description"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: {
                sm: 'none'
              },
              mt: 2
            }}
          >
            <NextLink
              href="/blog/1"
              passHref
            >
              <Button
                component="a"
                variant="contained"
              >
                Publish changes
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogPostCreate;
