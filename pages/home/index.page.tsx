import React, { Fragment, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import {
  Container,
  Stack,
  Tab,
  Tabs,
  List,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import Header from '../../components/Header';
import ContactWidget from '../../modules/ContactWidget';
import AppWidget from '../../modules/AppWidget';
import NftWidget from '../../modules/NftWidget';
import CollectibleItem from '../../components/CollectibleItem';
import TransactionItem from '../../components/TransactionItem';
import TabPanel from '../../components/Tabpanel';
import { useAppDispatch } from '../../hooks/store/useReduxHook';
import { getUser } from '../../store/users/actions';
import {
  Transaction,
  Collection
} from  '../../types/global.types';
import {
  TRANSACTION_MOCK_DATA,
  COLLECTION_MOCK_DATA
} from '../../mocks/nfts/nfts.mock';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);
  const [alignment, setAlignment] = useState('all');

  useEffect(() => {
    dispatch(getUser({
        name: 'Piyush Kakadiya',
        email: 'piyush.kakadiya@primelab.io'
      }
    ));
  }, []); // eslint-disable-line

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleToggleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };


  return (
    <Fragment>
      <Header />
      <Container>
        <Stack direction="row" spacing={2} pt={2}>
          <ContactWidget />
          <AppWidget />
        </Stack>
        <Stack mt={2} mb={2}>
          <NftWidget />
        </Stack>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="list item"
          centered
        >
          <Tab label="Collectibles" {...a11yProps(0)} />
          <Tab label="Transactions" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <List>
            {
              COLLECTION_MOCK_DATA.map((collection: Collection) => (
                <CollectibleItem
                  key={collection.id}
                  title={collection.title}
                  subTitle={collection.subTitle}
                />
              ))
            }
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Stack alignItems="center" mt={2}>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleToggleChange}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="sent">Sent</ToggleButton>
              <ToggleButton value="received">Received</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
          <List>
            {
              TRANSACTION_MOCK_DATA.map((transaction: Transaction) => (
                <TransactionItem
                  key={transaction.id}
                  title={transaction.title}
                  subTitle={transaction.subTitle}
                  timeLine={transaction.time}
                  isIncoming={transaction.receiced}
                />    
              ))
            }
          </List>
        </TabPanel>
      </Container>
    </Fragment>
  )
};

export default Home;