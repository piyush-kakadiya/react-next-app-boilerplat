/* eslint-disable */
import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TransactionItemProps } from '../../types/global.types';
import { cx } from "../../utils/styles/styles.utils";
import { styles } from './TransactionItem.styles';

export const TransactionItem = ({
  title,
  subTitle,
  timeLine,
  isIncoming = false,
}: TransactionItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <Typography variant="caption">
          {timeLine}
        </Typography>
      }
    >
      <ListItemIcon>
        {isIncoming ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      </ListItemIcon>
      <ListItemText
        primary={title}
        secondary={subTitle}
      />
    </ListItem>
  )
};