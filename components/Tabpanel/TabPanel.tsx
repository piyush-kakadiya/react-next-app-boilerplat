import React from 'react';
import { Box } from '@mui/material';
import { TabPanelProps } from '../../types/global.types';

export const TabPanel = ({
  children,
  value,
  index,
  ...props
}: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
};