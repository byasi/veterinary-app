import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Rating,
  TextField,
  Typography
} from '@mui/material';
import { Star as StarIcon } from '../../../icons/star';
import { getInitials } from '../../../utils/get-initials';

export const CompanyReviews = (props) => {
  const { reviews, averageRating, ...other } = props;
  const [rating, setRating] = useState(0);
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <div {...other}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">
          Reviews
        </Typography>
      </Box>
      <Card variant="outlined">
        <CardContent
          sx={{
            alignItems: {
              xs: 'flex-start',
              sm: 'center'
            },
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: {
              xs: 'column',
              sm: 'row'
            },
            mt: -1,
            '& > *': {
              mr: 2,
              mt: 1
            }
          }}
        >
          <Typography variant="subtitle2">
            Overall reviews
          </Typography>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Rating
              value={averageRating / 5}
              precision={0.1}
              readOnly
              max={1}
              sx={{ mr: 1 }}
            />
            <Typography variant="subtitle2">
              {averageRating}
              /5
            </Typography>
          </Box>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            •
            {' '}
            {reviews.length}
            {' '}
            reviews in total
          </Typography>
        </CardContent>
      </Card>
      {reviews.slice(0, 2).map((review) => (
        <Card
          key={review.id}
          sx={{ mt: 3 }}
          variant="outlined"
        >
          <CardContent>
            <Box
              sx={{
                alignItems: {
                  xs: 'flex-start',
                  sm: 'center'
                },
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'row'
                }
              }}
            >
              <Avatar
                src={review.avatar}
                sx={{ mr: 2 }}
              >
                {getInitials(review.author)}
              </Avatar>
              <div>
                <Typography variant="subtitle1">
                  {review.title}
                </Typography>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    ml: -2,
                    mt: -1
                  }}
                >
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      ml: 2,
                      mt: 1
                    }}
                  >
                    <StarIcon
                      color="action"
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography
                      noWrap
                      variant="subtitle2"
                    >
                      {averageRating}
                      /5
                    </Typography>
                  </Box>
                  <Typography
                    noWrap
                    sx={{
                      ml: 2,
                      mt: 1
                    }}
                    variant="subtitle2"
                  >
                    • {review.author}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    noWrap
                    sx={{
                      ml: 2,
                      mt: 1
                    }}
                    variant="body2"
                  >
                    • {formatDistanceStrict(review.createdAt, new Date(), { addSuffix: true })}
                  </Typography>
                </Box>
              </div>
            </Box>
            <Typography
              sx={{ mt: 2 }}
              variant="body1"
            >
              {review.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Box sx={{ mt: 3 }}>
        <Button>
          Load more
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mt: 3
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{ mr: 2 }}
        >
          {getInitials(user.name)}
        </Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            placeholder="Send your review"
            multiline
            rows={3}
          />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              m: -1,
              mt: 3
            }}
          >
            <Rating
              onChange={handleRatingChange}
              sx={{ m: 1 }}
              value={rating}
            />
            <Button
              variant="contained"
              sx={{ m: 1 }}
            >
              Send Review
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

CompanyReviews.defaultProps = {
  reviews: [],
  averageRating: 0
};

CompanyReviews.propTypes = {
  reviews: PropTypes.array,
  averageRating: PropTypes.number
};
