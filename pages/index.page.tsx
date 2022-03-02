import { useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { images } from '../constants/images.contants';
import { styles } from './index.styles';

const Splash: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // eslint-disable-line

  return (
    <Container>
      <Image
        src={images.splash}
        alt="primelab"
        layout="fill"
      />
      <div css={styles.main}>
        <Stack>
          <Image
            src={images.applogo}
            alt="HomePage"
            width={171}
            height={36}
          />
          <Typography mt={1} css={styles.typo}>
            a web3 gateway to hidden experiences
          </Typography>
        </Stack>
        <Stack css={styles.bottom}>
          <Typography mb={2} css={styles.typo}>
            powered by
          </Typography>
          <Image
            src={images.near}
            alt="Nexa"
            width={171}
            height={36}
          />
        </Stack>
      </div>
    </Container>
  )
};

export default Splash;