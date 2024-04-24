import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/lab';
import { Search as SearchIcon } from '../../../icons/search';
import { X } from '../../../icons/x';
import { Scrollbar } from '../../scrollbar';

const customers = [
  'Blind Spots Inc.',
  'Dispatcher Inc.',
  'ACME SRL',
  'Novelty I.S',
  'Beauty Clinic SRL',
  'Division Inc.'
];

const FiltersDrawerDesktop = styled(Drawer)({
  flexShrink: 0,
  width: 380,
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: 380
  }
});

const FiltersDrawerMobile = styled(Drawer)({
  maxWidth: '100%',
  width: 380,
  '& .MuiDrawer-paper': {
    height: 'calc(100% - 64px)',
    maxWidth: '100%',
    top: 64,
    width: 380
  }
});

export const InvoiceListFilters = (props) => {
  const { containerRef, filters = {}, onChange, onClose, open, ...other } = props;
  const queryRef = useRef(null);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleQueryChange = (event) => {
    event.preventDefault();
    onChange?.({
      ...filters,
      query: queryRef.current?.value
    });
  };

  const handleStartDateChange = (date) => {
    const newFilters = {
      ...filters,
      startDate: date
    };

    // Prevent end date to be before start date
    if (newFilters.endDate && date > newFilters.endDate) {
      newFilters.endDate = date;
    }

    onChange?.(newFilters);
  };

  const handleEndDateChange = (date) => {
    const newFilters = {
      ...filters,
      endDate: date
    };

    // Prevent start date to be after end date
    if (newFilters.startDate && date < newFilters.startDate) {
      newFilters.startDate = date;
    }

    onChange?.(newFilters);
  };

  const handleCustomerChange = (event) => {
    if (event.target.checked) {
      onChange?.({
        ...filters,
        customer: [...filters.customer, event.target.value]
      });
    } else {
      onChange?.({
        ...filters,
        customer: filters.customer.filter((customer) => customer !== event.target.value)
      });
    }
  };

  const handleStatusChange = (event) => {
    onChange?.({
      ...filters,
      status: event.target.checked ? 'paid' : undefined
    });
  };

  const content = (
    <Box
      sx={{
        pb: 3,
        pt: {
          xs: 3,
          lg: 8
        },
        px: 3
      }}
    >
      <Box
        sx={{
          display: {
            lg: 'none'
          },
          mb: 2
        }}
      >
        <IconButton onClick={onClose}>
          <X fontSize="small" />
        </IconButton>
      </Box>
      <Box
        component="form"
        onSubmit={handleQueryChange}
      >
        <TextField
          defaultValue=""
          fullWidth
          inputProps={{ ref: queryRef }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            )
          }}
          label="Search"
          placeholder="Search by invoice number"
        />
      </Box>
      <Typography
        color="textSecondary"
        sx={{ mt: 3 }}
        variant="subtitle2"
      >
        Issue date
      </Typography>
      <Stack
        spacing={2}
        sx={{ mt: 2 }}
      >
        <DatePicker
          inputFormat="dd/MM/yyyy"
          label="From"
          onChange={handleStartDateChange}
          renderInput={(inputProps) => <TextField {...inputProps} />}
          value={filters.startDate}
        />
        <DatePicker
          inputFormat="dd/MM/yyyy"
          label="To"
          onChange={handleEndDateChange}
          renderInput={(inputProps) => <TextField {...inputProps} />}
          value={filters.endDate}
        />
      </Stack>
      <Typography
        color="textSecondary"
        sx={{ mt: 3 }}
        variant="subtitle2"
      >
        From customer
      </Typography>
      <Box
        sx={{
          backgroundColor: 'background.default',
          borderColor: 'divider',
          borderRadius: 1,
          borderStyle: 'solid',
          borderWidth: 1,
          mt: 2
        }}
      >
        <Scrollbar sx={{ maxHeight: 200 }}>
          <FormGroup
            sx={{
              py: 1,
              px: 1.5
            }}
          >
            {customers.map((customer) => (
              <FormControlLabel
                control={<Checkbox checked={filters.customer?.includes(customer)} />}
                onChange={handleCustomerChange}
                key={customer}
                label={customer}
                value={customer}
              />
            ))}
          </FormGroup>
        </Scrollbar>
      </Box>
      <FormControlLabel
        control={<Switch checked={filters.status === 'paid'} />}
        label="Show paid only"
        onChange={handleStatusChange}
        sx={{ mt: 2 }}
      />
    </Box>
  );

  if (lgUp) {
    return (
      <FiltersDrawerDesktop
        anchor="left"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}>
        {content}
      </FiltersDrawerDesktop>
    );
  }

  return (
    <FiltersDrawerMobile
      anchor="left"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}>
      {content}
    </FiltersDrawerMobile>
  );
};

InvoiceListFilters.propTypes = {
  containerRef: PropTypes.any,
    filters: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
