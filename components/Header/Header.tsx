import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  Container,
  Stack,
  IconButton,
  Chip,
  Avatar,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Divider,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { useAppSelector } from '../../hooks/store/useReduxHook';
import { HeaderProps } from '../../types/global.types';
import { images } from '../../constants/images.contants';
import { styles } from './Header.styles';

export const Header = ({ isBack = false }: HeaderProps) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBack = () => {
    router.back();
  };
  
  return (
    <Container css={styles.header}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack direction='row' spacing={2}>
          {!isBack && (
            <Image
              src={images.logo}
              alt="HomePage"
              width={20}
              height={22}
            />
          )}
          {isBack && (
            <IconButton onClick={handleBack} css={styles.backButton}>
              <Image
                src={images.backArrow}
                alt="backArrow"
                width={20}
                height={22}
              />
            </IconButton>
          )}
          {isBack && (
            <Image
              src={images.home}
              alt="home"
              width={20}
              height={22}
            />
          )}
        </Stack>
        <Stack direction="row" alignItems="center">
          <Chip
            clickable
            avatar={<Avatar alt="Natacha" src={images.avatar1} />}
            label={user?.name}
            variant="outlined"
            onClick={handleClick}
            onDelete={() => { }}
            deleteIcon={<ArrowDropDownIcon />}
          />
          <IconButton>
            <Image
              src={images.notification}
              alt="HomePage"
              width={26}
              height={26}
            />
          </IconButton>
          <IconButton>
            <Image
              src={images.settings}
              alt="HomePage"
              width={26}
              height={26}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar alt="johndoe.near" src={images.avatar1} />
              <ListItemText primary="johndoe.near" secondary="0.34 NEAR" />
            </MenuItem>
            <MenuItem>
              <Avatar alt="mike.near" src={images.avatar2} />
              <ListItemText primary="mike.near" secondary="0.12 NEAR" />
            </MenuItem>
            <MenuItem>
              <Avatar alt="jhon.near" src={images.avatar3} />
              <ListItemText primary="jhon.near" secondary="2.34 NEAR" />
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <AddCircleOutlineRoundedIcon fontSize="small" />
              </ListItemIcon>
              Create Account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DownloadRoundedIcon fontSize="small" />
              </ListItemIcon>
              Import Account
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </Container>
  )
};