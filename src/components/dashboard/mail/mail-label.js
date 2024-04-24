import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, ButtonBase, ListItem, Typography } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { ExclamationCircle as ExclamationCircleIcon } from '../../../icons/exclamation-circle';
import { Star as StarIcon } from '../../../icons/star';
import { Inbox as InboxIcon } from '../../../icons/inbox';
import { Mail as MailIcon } from '../../../icons/mail';
import { MailOpen as MailOpenIcon } from '../../../icons/mail-open';
import { Trash as TrashIcon } from '../../../icons/trash';
import { TagOutlined as TagOutlinedIcon } from '../../../icons/tag-outlined';
import { PaperAirplane as PaperAirplaneIcon } from '../../../icons/paper-airplane';

const systemLabelIcons = {
  all: MailIcon,
  inbox: InboxIcon,
  trash: TrashIcon,
  drafts: MailOpenIcon,
  spam: ExclamationCircleIcon,
  sent: PaperAirplaneIcon,
  starred: StarIcon,
  important: LabelImportantIcon
};

const getIcon = (label) => {
  if (label.type === 'system') {
    return systemLabelIcons[label.id];
  }

  return TagOutlinedIcon;
};

const getColor = (label) => {
  if (label.type === 'custom') {
    return label.color;
  }

  return 'inherit';
};

export const MailLabel = (props, ref) => {
  const { active, label, ...other } = props;

  const Icon = getIcon(label);
  const color = getColor(label);
  const displayUnreadCount = Boolean(label.unreadCount && label.unreadCount > 0);
  const href = label.id !== 'inbox'
    ? `/dashboard/mail?label=${label.id}`
    : '/dashboard/mail';

  return (
    <ListItem
      disableGutters
      disablePadding
      sx={{
        '& + &': {
          mt: 1
        }
      }}
      {...other}>
      <NextLink
        href={href}
        passHref
      >
        <ButtonBase
          component="a"
          href={href}
          sx={{
            borderRadius: 1,
            color: 'text.secondary',
            flexGrow: 1,
            fontSize: (theme) => theme.typography.button.fontSize,
            fontWeight: (theme) => theme.typography.button.fontWeight,
            justifyContent: 'flex-start',
            lineHeight: (theme) => theme.typography.button.lineHeight,
            py: 1,
            px: 2,
            textAlign: 'left',
            '&:hover': {
              backgroundColor: 'action.hover'
            },
            ...(active && {
              backgroundColor: 'action.selected',
              color: 'text.primary'
            })
          }}
        >
          <Icon
            sx={{
              color,
              mr: 1
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {label.name}
          </Box>
          {displayUnreadCount && (
            <Typography
              color="inherit"
              variant="subtitle2"
            >
              {label.unreadCount}
            </Typography>
          )}
        </ButtonBase>
      </NextLink>
    </ListItem>
  );
};

MailLabel.propTypes = {
  active: PropTypes.bool,
    label: PropTypes.object.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};
