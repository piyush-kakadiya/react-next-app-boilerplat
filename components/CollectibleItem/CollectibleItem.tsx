import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CollectibleItemProps } from '../../types/global.types';

export const CollectibleItem = ({
  title,
  subTitle,
}: CollectibleItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <ChevronRightIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subTitle} />
    </ListItem>
  )
};