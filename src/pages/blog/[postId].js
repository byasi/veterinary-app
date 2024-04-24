import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { format, subHours } from 'date-fns';
import Markdown from 'react-markdown/with-html';
import { Avatar, Box, Button, Card, Chip, Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blogApi } from '../../__fake-api__/blog-api';
import { BlogNewsletter } from '../../components/blog/blog-newsletter';
import { BlogComment } from '../../components/blog/blog-comment';
import { BlogCommentAdd } from '../../components/blog/blog-comment-add';
import { ArrowLeft as ArrowLeftIcon } from '../../icons/arrow-left';
import { useMounted } from '../../hooks/use-mounted';
import { gtm } from '../../lib/gtm';

const comments = [
  {
    id: 'd0ab3d02ef737fa6b007e35d',
    authorAvatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    authorName: 'Alcides Antonio',
    authorRole: 'Product Designer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: subHours(new Date(), 2).getTime(),
    isLiked: true,
    likes: 12
  },
  {
    id: '3ac1e17289e38a84108efdf3',
    authorAvatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    authorName: 'Jie Yan Song',
    authorRole: 'Web Developer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    createdAt: subHours(new Date(), 8).getTime(),
    isLiked: false,
    likes: 8
  }
];

const MarkdownWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& h2': {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h5.lineHeight,
    marginBottom: theme.spacing(3)
  },
  '& h3': {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: theme.typography.h3.lineHeight,
    marginBottom: theme.spacing(3)
  },
  '& p': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(2)
  },
  '& li': {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    marginBottom: theme.spacing(1)
  }
}));

const BlogPostDetails = () => {
  const isMounted = useMounted();
  const [post, setPost] = useState(null);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getPost = useCallback(async () => {
    try {
      const data = await blogApi.getPost();

      if (isMounted()) {
        setPost(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          Blog: Post Details | Material Kit Pro
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
            Blog Post
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
                Edit Post
              </Button>
            </NextLink>
          </Card>
          <Chip label={post.category} />
          <Typography
            sx={{ mt: 3 }}
            variant="h3"
          >
            {post.title}
          </Typography>
          <Typography
            color="textSecondary"
            sx={{ mt: 3 }}
            variant="subtitle1"
          >
            {post.shortDescription}
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              mt: 3
            }}
          >
            <Avatar src={post.author.avatar} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">
                By
                {' '}
                {post.author.name}
                {' '}
                •
                {' '}
                {format(post.publishedAt, 'MMMM d, yyyy')}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {`${post.readTime} read`}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${post.cover})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: 1,
              height: 380,
              mt: 3
            }}
          />
          <Box sx={{ py: 3 }}>
            <MarkdownWrapper>
              <Markdown source={post.content} />
            </MarkdownWrapper>
          </Box>
          <Divider sx={{ my: 3 }} />
          {comments.map((comment) => (
            <BlogComment
              key={comment.id}
              {...comment} />
          ))}
          <Divider sx={{ my: 3 }} />
          <BlogCommentAdd />
          <Box sx={{ mt: 8 }}>
            <BlogNewsletter />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogPostDetails;
