import {Box, Drawer, useMediaQuery} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import {useState} from 'react';

function Header() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [state, setState] = useState(false);

  return (
    <header>
      <a href={'/'}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt=""/>
      </a>
      {
        mobile ? (
          <>
            <Button onClick={() => setState(true)}>
              <MenuIcon/>
            </Button>
            <Drawer className='drawer' anchor={'left'} open={state} onClose={() => setState(false)}>
              <Box className='header-burger-link'>
                <a href="/">Home</a>
                <a href="/">Login</a>
                <a href="/">Register</a>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box className='header-link'>
            <a href="/">Home</a>
            <a href="/">Login</a>
            <a href="/">Register</a>
          </Box>
        )}
    </header>
  );
}

export default Header;
