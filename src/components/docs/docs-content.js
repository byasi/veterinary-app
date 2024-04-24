import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import { styled } from '@mui/material/styles';

const Link = (props) => {
  const { href, children, ...other } = props;

  if (!href.startsWith('http')) {
    return (
      <a
        href={href}
        {...other}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      rel="nofollow noreferrer noopener"
      target="_blank"
      {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

const Code = (props) => {
  const { language, value, ...other } = props;

  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      {...other}>
      {value}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
};

const DocsContentRoot = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& blockquote': {
    borderLeft: `4px solid ${theme.palette.text.secondary}`,
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    '& > p': {
      color: theme.palette.text.secondary,
      marginBottom: 0
    }
  },
  '& code': {
    color: '#01ab56',
    fontFamily: 'Inconsolata, Monaco, Consolas, \'Courier New\', Courier, monospace',
    fontSize: 14,
    paddingLeft: 2,
    paddingRight: 2,
    '&:before': {
      content: '"`"'
    },
    '&:after': {
      content: '"`"'
    }
  },
  '& pre > code': {
    '&:before': {
      content: 'unset'
    },
    '&:after': {
      content: 'unset'
    }
  },
  '& h1': {
    fontSize: 35,
    fontWeight: 500,
    letterSpacing: '-0.24px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h2': {
    fontSize: 29,
    fontWeight: 500,
    letterSpacing: '-0.24px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h3': {
    fontSize: 24,
    fontWeight: 500,
    letterSpacing: '-0.06px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(6)
  },
  '& h4': {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '-0.06px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4)
  },
  '& h5': {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '-0.05px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  '& h6': {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: '-0.05px',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  '& li': {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(4)
  },
  '& p': {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    '& > a': {
      color: theme.palette.secondary.main
    }
  }
}));

export const DocsContent = (props) => {
  const { content } = props;

  return (
    <DocsContentRoot>
      <Markdown
        escapeHtml
        renderers={{
          link: Link,
          code: Code
        }}
        source={content}
      />
    </DocsContentRoot>
  );
};

DocsContent.propTypes = {
  content: PropTypes.string
};
