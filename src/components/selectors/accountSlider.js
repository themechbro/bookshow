import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';



export default function AccountSlider(){
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (inOpen) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setOpen(inOpen);
    };
  




    return(
        <Box sx={{ display: 'flex' }}>
      <Button variant="none" color="neutral" onClick={toggleDrawer(true)}>
        Hi, Adrin 
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {['Notifications', 'Orders', 'Stream Library', 'Help and Support'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider  />
          <List>
            {['Rewards', 'Book a Smile', 'Account and Settings'].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
    )
}
