import { useMemo } from 'react';
import { Box, Checkbox, Chip, Divider, FormControlLabel, Input } from '@mui/material';
import { MultiSelect } from '../../multi-select';
import { Search as SearchIcon } from '../../../icons/search';

const categoryOptions = [
  {
    label: 'Digital',
    value: 'digital'
  },
  {
    label: 'Service',
    value: 'service'
  }
];

const statusOptions = [
  {
    label: 'Published',
    value: 'published'
  },
  {
    label: 'Draft',
    value: 'draft'
  }
];

const stockOptions = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Available',
    value: 'available'
  },
  {
    label: 'Out of Stock',
    value: 'outOfStock'
  }
];

export const Form2 = () => {
  // We memoize this part to prevent re-render issues
  const filterItems = useMemo(() => [
    {
      label: 'Category',
      field: 'category',
      value: 'digital',
      displayValue: 'Digital'
    },
    {
      label: 'Category',
      field: 'category',
      value: 'service',
      displayValue: 'Service'
    },
    {
      label: 'Status',
      field: 'status',
      value: 'published',
      displayValue: 'Published'
    },
    {
      label: 'Stock',
      field: 'inStock',
      value: 'outOfStock',
      displayValue: 'Out of Stock'
    }
  ], []);

  const categoryValues = useMemo(() => filterItems
    .filter((filterItems) => filterItems.field === 'category')
    .map((filterItems) => filterItems.value), [filterItems]);

  const statusValues = useMemo(() => filterItems
    .filter((filterItems) => filterItems.field === 'status')
    .map((filterItems) => filterItems.value), [filterItems]);

  const stockValues = useMemo(() => filterItems
    .filter((filterItems) => filterItems.field === 'inStock')
    .map((filterItems) => filterItems.value), [filterItems]);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        minHeight: '100%',
        p: 3
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2
        }}
      >
        <SearchIcon fontSize="small" />
        <Box
          sx={{
            flexGrow: 1,
            ml: 3
          }}
        >
          <Input
            disableUnderline
            fullWidth
            placeholder="Enter a keyword"
          />
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          p: 2
        }}
      >
        {filterItems.map((filterItem, i) => (
          <Chip
            key={i}
            label={(
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  '& span': {
                    fontWeight: 600
                  }
                }}
              >
                <span>
                  {filterItem.label}
                </span>
                :
                {' '}
                {filterItem.displayValue}
              </Box>
            )}
            onDelete={() => { }}
            sx={{ m: 1 }}
            variant="outlined"
          />
        ))}
      </Box>
      <Divider />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          p: 1
        }}
      >
        <MultiSelect
          label="Category"
          options={categoryOptions}
          value={categoryValues}
        />
        <MultiSelect
          label="Status"
          options={statusOptions}
          value={statusValues}
        />
        <MultiSelect
          label="Stock"
          options={stockOptions}
          value={stockValues}
        />
        <Box sx={{ flexGrow: 1 }} />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="In network"
        />
      </Box>
    </Box>
  );
};
