//import './ButtonAppBar.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import Modal from '@mui/material/Modal'
//import LoginForm from '../login/LoginForm';
import { useHistory, NavLink } from 'react-router-dom';
import { ListItem, List, Drawer, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CheckCircle from '@mui/icons-material/CheckCircle';

const ButtonAppBar = () => {
  const history = useHistory()
  const [isOpen, setIsOpen] = React.useState(false)

   const toggleDrawer = () => {
     setIsOpen(!isOpen)
   }

   const handleNavChoice = (choice) => {
     history.push(`/${choice}`)
     toggleDrawer()
   }

   const drawerItemList = () => (
     <Box sx={{ width: 250 }} role="presentation">
       <List>
         <ListItem button onClick={() => handleNavChoice('games')}>
           <ListItemIcon>
             <HomeIcon/>
           </ListItemIcon>
           <ListItemText primary='Home' />
         </ListItem>
         <ListItem button onClick={() => handleNavChoice('adventures')}>
           <ListItemIcon>
             <CheckCircle/>
           </ListItemIcon>
           <ListItemText primary= 'Adventures' />
         </ListItem>
         <ListItem button onClick={() => handleNavChoice('favorites')}>
           <ListItemIcon>
             <FavoriteIcon/>
           </ListItemIcon>
           <ListItemText primary= 'Favorites' />
         </ListItem>
       </List>
     </Box>
   )
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to The Kingdom of Hyrule
          </Typography>
          <Button color="inherit">
          <NavLink to="/login">Login to save your Zelda Games</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer anchor='left' open={isOpen} onClose={toggleDrawer}>
      {drawerItemList()}
    </Drawer>
     </>
  );
}

export default ButtonAppBar