import { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, Divider, Input, Typography } from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';
import { MultiSelect } from '../../multi-select';

const categoryOptions = [
  {
    label: 'Healthcare',
    value: 'healthcare'
  },
  {
    label: 'Makeup',
    value: 'makeup'
  },
  {
    label: 'Dress',
    value: 'dress'
  },
  {
    label: 'Skincare',
    value: 'skincare'
  },
  {
    label: 'Jewelry',
    value: 'jewelry'
  },
  {
    label: 'Blouse',
    value: 'blouse'
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

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
const useUpdateEffect = (effect, dependencies = []) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
      if (isInitialMount.current) {
        isInitialMount.current = false;
      } else {
        return effect();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies);
};

export const ProjectListFilters = (props) => {
  const { onChange, ...other } = props;
  const [queryValue, setQueryValue] = useState('');
  const [filterItems, setFilterItems] = useState([]);

  useUpdateEffect(() => {
      const filters = {
        name: undefined,
        category: [],
        status: [],
        inStock: undefined
      };

      // Transform the filter items in an object that can be used by the parent component to call the
      // serve with the updated filters
      filterItems.forEach((filterItem) => {
        switch (filterItem.field) {
          case 'name':
            // There will (or should) be only one filter item with field "name"
            // so we can setup it directly
            filters.name = filterItem.value;
            break;
          case 'category':
            filters.category.push(filterItem.value);
            break;
          case 'status':
            filters.status.push(filterItem.value);
            break;
          case 'inStock':
            // The value can be "available" or "outOfStock" and we transform it to a boolean
            filters.inStock = filterItem.value === 'available';
            break;
          default:
            break;
        }
      });

      onChange?.(filters);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterItems]);

  const handleDelete = (filterItem) => {
    setFilterItems((prevState) => prevState.filter((_filterItem) => {
      return !(filterItem.field === _filterItem.field && filterItem.value === _filterItem.value);
    }));
  };

  const handleQueryChange = (event) => {
    setQueryValue(event.target.value);
  };

  const handleQueryKeyup = (event) => {
    if (event.code === 'Enter' && queryValue) {
      // We only allow one chip for the name field

      const filterItem = filterItems.find((filterItem) => filterItem.field === 'name');

      if (filterItem) {
        setFilterItems((prevState => prevState.map((filterItem) => {
          if (filterItem.field === 'name') {
            return {
              ...filterItem,
              value: queryValue
            };
          }

          return filterItem;
        })));
      } else {
        setFilterItems((prevState) => [
          ...prevState,
          {
            label: 'Name',
            field: 'name',
            value: queryValue
          }
        ]);
      }

      setQueryValue('');
    }
  };

  const handleCategoryChange = (values) => {
    setFilterItems((prevState) => {
      const valuesFound = [];

      // First cleanup the previous filter items
      const newFilterItems = prevState.filter((filterItem) => {
        if (filterItem.field !== 'category') {
          return true;
        }

        const found = values.includes(filterItem.value);

        if (found) {
          valuesFound.push(filterItem.value);
        }

        return found;
      });

      // Nothing changed
      if (values.length === valuesFound.length) {
        return newFilterItems;
      }

      values.forEach((value) => {
        if (!valuesFound.includes(value)) {
          const option = categoryOptions.find((option) => option.value === value);

          newFilterItems.push({
            label: 'Category',
            field: 'category',
            value,
            displayValue: option.label
          });
        }
      });

      return newFilterItems;
    });
  };

  const handleStatusChange = (values) => {
    setFilterItems((prevState) => {
      const valuesFound = [];

      // First cleanup the previous filter items
      const newFilterItems = prevState.filter((filterItem) => {
        if (filterItem.field !== 'status') {
          return true;
        }

        const found = values.includes(filterItem.value);

        if (found) {
          valuesFound.push(filterItem.value);
        }

        return found;
      });

      // Nothing changed
      if (values.length === valuesFound.length) {
        return newFilterItems;
      }

      values.forEach((value) => {
        if (!valuesFound.includes(value)) {
          const option = statusOptions.find((option) => option.value === value);

          newFilterItems.push({
            label: 'Status',
            field: 'status',
            value,
            displayValue: option.label
          });
        }
      });

      return newFilterItems;
    });
  };

  const handleStockChange = (values) => {
    // Stock can only have one value, even if displayed as multi-select, so we select the first one.
    // This example allows you to select one value or "All", which is not included in the
    // rest of multi-selects.

    setFilterItems((prevState) => {
      // First cleanup the previous filter items
      const newFilterItems = prevState.filter((filterItem) => filterItem.field !== 'inStock');
      const latestValue = values[values.length - 1];

      switch (latestValue) {
        case 'available':
          newFilterItems.push({
            label: 'Stock',
            field: 'inStock',
            value: 'available',
            displayValue: 'Available'
          });
          break;
        case 'outOfStock':
          newFilterItems.push({
            label: 'Stock',
            field: 'inStock',
            value: 'outOfStock',
            displayValue: 'Out of Stock'
          });
          break;
        default:
          // Should be "all", so we do not add this filter
          break;
      }

      return newFilterItems;
    });
  };

  // We memoize this part to prevent re-render issues
  const categoryValues = useMemo(() => filterItems
    .filter((filterItems) => filterItems.field === 'category')
    .map((filterItems) => filterItems.value), [filterItems]);

  const statusValues = useMemo(() => filterItems
    .filter((filterItems) => filterItems.field === 'status')
    .map((filterItems) => filterItems.value), [filterItems]);

  const stockValues = useMemo(() => {
    const values = filterItems
      .filter((filterItems) => filterItems.field === 'inStock')
      .map((filterItems) => filterItems.value);

    // Since we do not display the "all" as chip, we add it to the multi-select as a selected value
    if (values.length === 0) {
      values.unshift('all');
    }

    return values;
  }, [filterItems]);

  return (
    <div {...other}>
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
            onChange={handleQueryChange}
            onKeyUp={handleQueryKeyup}
            placeholder="Search by product name"
            value={queryValue}
          />
        </Box>
      </Box>
      <Divider />
      {filterItems.length > 0
        ? (
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
                    {filterItem.displayValue || filterItem.value}
                  </Box>
                )}
                onDelete={() => handleDelete(filterItem)}
                sx={{ m: 1 }}
                variant="outlined"
              />
            ))}
          </Box>
        )
        : (
          <Box sx={{ p: 3 }}>
            <Typography
              color="textSecondary"
              variant="subtitle2"
            >
              No filters applied
            </Typography>
          </Box>
        )}
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
          onChange={(value) => handleCategoryChange(value)}
          options={categoryOptions}
          value={categoryValues}
        />
        <MultiSelect
          label="Status"
          onChange={(value) => handleStatusChange(value)}
          options={statusOptions}
          value={statusValues}
        />
        <MultiSelect
          label="Stock"
          onChange={(value) => handleStockChange(value)}
          options={stockOptions}
          value={stockValues}
        />
      </Box>
    </div>
  );
};

ProjectListFilters.propTypes = {
  onChange: PropTypes.func
};
