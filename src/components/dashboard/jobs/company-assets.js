import PropTypes from 'prop-types';
import { Badge, Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { DotsHorizontal as DotsHorizontalIcon } from '../../../icons/dots-horizontal';
import { Download as DownloadIcon } from '../../../icons/download';

export const CompanyAssets = (props) => {
  const { assets, ...other } = props;

  return (
    <div {...other}>
      <div>
        <Typography variant="h6">
          Team ({assets.length})
        </Typography>
      </div>
      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={3}
        >
          {assets.map((asset) => (
            <Grid
              item
              key={asset.id}
              sm={6}
              xs={12}
            >
              <Box
                sx={{
                  borderColor: 'divider',
                  borderRadius: 1,
                  borderStyle: 'solid',
                  borderWidth: 1
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    backgroundColor: (theme) => theme.palette.mode === 'dark'
                      ? 'neutral.900'
                      : 'neutral.100',
                    justifyContent: 'center',
                    py: 3
                  }}
                >
                  <Badge
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    badgeContent={asset.extension.toUpperCase()}
                    color="primary"
                  >
                    {asset.extension === 'pdf'
                      ? (
                        <img
                          alt=""
                          src="/static/document_text.svg"
                          width="40px"
                          height="50px"
                        />
                      )
                      : (
                        <img
                          alt=""
                          src="/static/photograph.svg"
                          width="50px"
                          height="45px"
                        />
                      )}
                  </Badge>
                </Box>
                <Divider />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2
                  }}
                >
                  <div>
                    <Typography variant="subtitle2">
                      {asset.fileName}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="caption"
                    >
                      {asset.size}
                    </Typography>
                  </div>
                  <IconButton edge="end">
                    <DotsHorizontalIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: 1
                  }}
                >
                  <Button
                    endIcon={(
                      <DownloadIcon fontSize="small" />
                    )}
                  >
                    Download
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

CompanyAssets.defaultProps = {
  assets: []
};

CompanyAssets.propTypes = {
  assets: PropTypes.array
};
