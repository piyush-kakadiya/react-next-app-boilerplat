import React from 'react';
import type { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import Header from '../../components/Header';
import { styles } from './index.styles';

const Category: NextPage = () => {
  return (
    <>
      <Header isBack />
      <Container>
        <div css={styles.section}>
          <Typography mt={1}>
            Popular Categories
          </Typography>
        </div>
      </Container>
    </>
  )
};

export default Category;