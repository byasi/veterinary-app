import PropTypes from 'prop-types';
import { List, ListSubheader } from '@mui/material';
import { DocsSidebarItem } from './docs-sidebar-item';

const renderNavItems = ({ depth = 0, items, path }) => (
  <List disablePadding>
    {items.reduce((acc, item) => reduceChildRoutes({
      acc,
      item,
      path,
      depth
    }), [])}
  </List>
);

const reduceChildRoutes = ({ acc, depth, item, path }) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = path.includes(item.path);
  const exactMatch = path === item.path;

  if (item.children) {
    acc.push(
      <DocsSidebarItem
        active={partialMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          path
        })}
      </DocsSidebarItem>
    );
  } else {
    acc.push(
      <DocsSidebarItem
        active={exactMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

export const DocsSidebarSection = (props) => {
  const { items, path, title, ...other } = props;

  return (
    <List
      subheader={(
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: 'text.secondary',
            fontSize: '0.75rem',
            fontWeight: 700,
            lineHeight: 2.5,
            ml: 4,
            textTransform: 'uppercase'
          }}
        >
          {title}
        </ListSubheader>
      )}
      {...other}>
      {renderNavItems({
        items,
        path
      })}
    </List>
  );
};

DocsSidebarSection.propTypes = {
  items: PropTypes.array,
  path: PropTypes.string,
  title: PropTypes.string
};
