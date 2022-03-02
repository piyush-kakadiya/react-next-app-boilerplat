import React from 'react';
import Image from 'next/image';
import {
  Card,
  Typography,
  Button
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { images } from '../../constants/images.contants';
import { styles } from './NftWidget.styles';

export const NftWidget = () => {
  return (
    <Card css={styles.card}>
      <div css={styles.left}>
        <Typography mb={2}>
          Start Creating your NFT Today
        </Typography>
        <Button variant="contained" endIcon={<ChevronRightIcon />}>
          Create NFT
        </Button>
      </div>
      <div css={styles.right}> 
        <Image
          src={images.flower}
          alt="primelab"
          width={150}
          height={150}
          css={styles.icon}
        />
      </div>
    </Card>
  )
};