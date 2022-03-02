import React from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  Stack,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styles } from './AppWidget.styles';

export const AppWidget = () => {
  const router = useRouter();

  return (
    <Card css={styles.card}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography css={styles.title}>
          web3 Apps
        </Typography>
        <IconButton size="small">
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Stack>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          id="web3Button"
          onClick={() => router.push('/category')}
        >
          12 Connected
        </Button>
      </Stack>
    </Card>
  )
};