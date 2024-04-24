import { useEffect } from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { DocsContent } from '../../components/docs/docs-content';
import { DocsLayout } from '../../components/docs/docs-layout';
import { gtm } from '../../lib/gtm';
import { getArticleBySlug, getArticles } from '../../utils/docs';

export const getStaticPaths = () => {
  const articles = getArticles(['slug']);

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = ({ params }) => {
  const article = getArticleBySlug(params.slug, ['content', 'slug', 'title']);

  return {
    props: {
      article
    }
  };
};

const Article = (props) => {
  const { article } = props;
  const router = useRouter();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>
          {`Docs: ${article.title} | Material Kit Pro`}
        </title>
      </Head>
      <Container
        maxWidth="lg"
        sx={{ pb: '120px' }}
      >
        <DocsContent content={article.content} />
      </Container>
    </>
  );
};

Article.getLayout = (page) => (
  <DocsLayout>
    {page}
  </DocsLayout>
);

export default Article;
