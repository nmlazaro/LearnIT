import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const settings = ['Account', 'Logout']; // Not functional

function UserWidget() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <IconButton
        variant="outlined"
        color="inherit"
        onClick={handleOpenUserMenu}
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: '8px',
        }}
      >
        <PersonOutlineIcon />
      </IconButton>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default UserWidget;
