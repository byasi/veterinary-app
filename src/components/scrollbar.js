import 'simplebar/dist/simplebar.min.css';
import { forwardRef } from 'react';
import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';

const ScrollbarRoot = styled(SimpleBar)``;

export const Scrollbar = forwardRef((props, ref) => {
  return (
    <ScrollbarRoot
      ref={ref}
      {...props} />
  );
});
