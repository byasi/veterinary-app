import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LightBulb as LightBulbIcon } from '../icons/light-bulb';

const TipRoot = styled('div')((({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark'
    ? theme.palette.neutral[800]
    : theme.palette.neutral[100],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: theme.spacing(1)
})));

export const Tip = (props) => {
  const { message } = props;

  return (
    <TipRoot>
      <LightBulbIcon
        sx={{
          color: 'text.secondary',
          mr: 1
        }}
        fontSize="small"
      />
      <Typography
        color="textSecondary"
        sx={{
          '& span': {
            fontWeight: 700
          }
        }}
        variant="caption"
      >
        <span>
          Tip.
        </span>
        {' '}
        {message}
      </Typography>
    </TipRoot>
  );
};

Tip.propTypes = {
  message: PropTypes.string.isRequired
};
