import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Card, Container, Divider, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blogApi } from '../../__fake-api__/blog-api';
import { BlogNewsletter } from '../../components/blog/blog-newsletter';
import { BlogPostCard } from '../../components/blog/blog-post-card';
import { useMounted } from '../../hooks/use-mounted';
import { ArrowLeft as ArrowLeftIcon } from '../../icons/arrow-left';
import { gtm } from '../../lib/gtm';

const BlogPostList = () => {
  const isMounted = useMounted();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getPosts = useCallback(async () => {
    try {
      const data = await blogApi.getPosts();

      if (isMounted()) {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Head>
        <title>
          Blog: Post List | Material Kit Pro
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
            Blog Platform
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
            <NextLink
              href="/blog/new"
              passHref
            >
              <Button
                component="a"
                variant="contained"
              >
                New Post
              </Button>
            </NextLink>
          </Card>
          <Typography variant="h4">
            Recent Articles
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle1"
          >
            Discover the latest news, tips and user research insights from Acme.
          </Typography>
          <Typography
            color="textSecondary"
            variant="subtitle1"
          >
            You will learn about web infrastructure, design systems and devops APIs best
            practices.
          </Typography>
          <Divider sx={{ my: 3 }} />
          {posts.map((post) => (
            <BlogPostCard
              authorAvatar={post.author.avatar}
              authorName={post.author.name}
              category={post.category}
              cover={post.cover}
              key={post.title}
              publishedAt={post.publishedAt}
              readTime={post.readTime}
              shortDescription={post.shortDescription}
              title={post.title}
            />
          ))}
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              mt: 4,
              mb: 8
            }}
          >
            <Button
              disabled
              startIcon={(
                <ArrowBackIcon fontSize="small" />
              )}
            >
              Newer
            </Button>
            <Button
              endIcon={(
                <ArrowForwardIcon fontSize="small" />
              )}
              sx={{ ml: 1 }}
            >
              Older posts
            </Button>
          </Box>
          <Box sx={{ mt: 8 }}>
            <BlogNewsletter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogPostList;
